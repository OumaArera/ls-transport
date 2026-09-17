import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, LoaderCircle, Send, TriangleAlert } from 'lucide-react';
import { format, useContent, useT, type Dictionary } from '@/i18n';
import { contact } from '@/data/site';
import { cn } from '@/lib/cn';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Fields = {
  name: string;
  email: string;
  phone: string;
  /** A service slug or `extra-N` — never a label, so the selection survives a
      language switch and comes back re-labelled rather than stranded. */
  subjectKey: string;
  message: string;
};

/**
 * Posts to VITE_CONTACT_ENDPOINT when configured (Formspree, Netlify Forms,
 * a serverless function — anything that accepts a JSON POST). Without an
 * endpoint it falls back to opening the visitor's mail client, so the form is
 * never a dead end before the backend is wired up.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

/** Turns the journey-planner query string into a ready-written enquiry. */
const composeJourneyMessage = (params: URLSearchParams, t: Dictionary) => {
  const from = params.get('from');
  const to = params.get('to');
  const date = params.get('date');
  const party = params.get('party');
  if (!from && !to && !date && !party) return '';

  const lines = [t.form.journeyIntro, ''];
  if (from) lines.push(`${t.form.journeyPickup}: ${from}`);
  if (to) lines.push(`${t.form.journeyDestination}: ${to}`);
  if (date) lines.push(`${t.form.journeyDate}: ${date}`);
  if (party) lines.push(`${t.form.journeyParty}: ${party}`);
  lines.push('', t.form.journeyExtra);
  return lines.join('\n');
};

export function ContactForm() {
  const t = useT();
  const { services } = useContent();
  const [searchParams] = useSearchParams();
  const [fields, setFields] = useState<Fields>(() => ({
    name: '',
    email: '',
    phone: '',
    subjectKey: services[0].slug,
    message: '',
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  /** Once the visitor edits the message we stop regenerating it for them. */
  const messageEdited = useRef(false);

  const subjectOptions = useMemo(
    () => [
      ...services.map((service) => ({ key: service.slug, label: service.title })),
      ...t.form.extraSubjects.map((label, index) => ({ key: `extra-${index}`, label })),
    ],
    [services, t],
  );

  const subjectLabel =
    subjectOptions.find((option) => option.key === fields.subjectKey)?.label ??
    subjectOptions[0].label;

  // Pre-fill from the journey planner, and keep the subject readable after a
  // language switch by matching on the service slug rather than the label.
  useEffect(() => {
    const serviceSlug = searchParams.get('service');
    const matchedService = services.find((service) => service.slug === serviceSlug);
    const message = messageEdited.current ? '' : composeJourneyMessage(searchParams, t);

    setFields((current) => ({
      ...current,
      subjectKey: matchedService?.slug ?? current.subjectKey,
      message: message || current.message,
    }));
  }, [searchParams, services, t]);

  const update = (key: keyof Fields, value: string) => {
    if (key === 'message') messageEdited.current = true;
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = t.form.errors.name;
    if (!fields.email.trim()) {
      next.email = t.form.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
      next.email = t.form.errors.emailInvalid;
    }
    if (fields.phone.trim() && !/^[\d\s()+.-]{7,}$/.test(fields.phone.trim())) {
      next.phone = t.form.errors.phone;
    }
    if (fields.message.trim().length < 10) {
      next.message = t.form.errors.message;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const mailtoFallback = () => {
    const body = [
      `${t.form.mailName}: ${fields.name}`,
      `${t.form.mailEmail}: ${fields.email}`,
      fields.phone ? `${t.form.mailPhone}: ${fields.phone}` : null,
      '',
      fields.message,
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `${subjectLabel} — ${t.form.mailSubjectSuffix}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    if (!ENDPOINT) {
      mailtoFallback();
      setStatus('success');
      messageEdited.current = false;
      setFields({ name: '', email: '', phone: '', subjectKey: fields.subjectKey, message: '' });
      return;
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...fields, subject: subjectLabel, language: t.code }),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('success');
      messageEdited.current = false;
      setFields({
        name: '',
        email: '',
        phone: '',
        subjectKey: services[0].slug,
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-ink-100 bg-white p-8 text-center shadow-card">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-gold-50 text-gold-700">
          <Check className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 display-tight text-3xl font-extrabold">{t.form.successTitle}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          {format(t.form.successBody, { hours: t.site.hoursShort })}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-display text-base font-bold uppercase tracking-wide text-gold-700 underline-offset-4 hover:underline"
        >
          {t.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-sm border border-ink-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={t.form.name}
          id="name"
          required
          value={fields.name}
          error={errors.name}
          onChange={(value) => update('name', value)}
          autoComplete="name"
        />
        <Field
          label={t.form.email}
          id="email"
          type="email"
          required
          value={fields.email}
          error={errors.email}
          onChange={(value) => update('email', value)}
          autoComplete="email"
        />
        <Field
          label={t.form.phone}
          id="phone"
          type="tel"
          value={fields.phone}
          error={errors.phone}
          onChange={(value) => update('phone', value)}
          autoComplete="tel"
        />

        <div>
          <label htmlFor="subject" className={labelClass}>
            {t.form.service}
          </label>
          <select
            id="subject"
            name="subject"
            value={fields.subjectKey}
            onChange={(event) => update('subjectKey', event.target.value)}
            className={cn(inputClass, 'appearance-none bg-white')}
          >
            {subjectOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {t.form.message} <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={fields.message}
            onChange={(event) => update('message', event.target.value)}
            className={cn(inputClass, 'resize-y', errors.message && errorInputClass)}
            placeholder={t.form.messagePlaceholder}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorTextClass}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-start gap-2 rounded-sm border border-gold-200 bg-gold-50 p-4 text-sm text-gold-900">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            {t.form.errorBanner}{' '}
            <a href={`mailto:${contact.email}`} className="font-semibold underline">
              {contact.email}
            </a>
            .
          </span>
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gold-500 px-7 py-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-ink-950 shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-400 disabled:translate-y-0 disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="size-5" aria-hidden="true" />
          )}
          {status === 'submitting' ? t.form.submitting : t.form.submit}
        </button>
        <p className="text-xs leading-relaxed text-ink-500">
          {format(t.form.replyNote, { hours: t.site.hours })}
        </p>
      </div>
    </form>
  );
}

const labelClass =
  'mb-2 block font-display text-xs font-bold uppercase tracking-[0.18em] text-ink-700';
const inputClass =
  'w-full rounded-sm border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition placeholder:text-ink-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/25';
const errorInputClass = 'border-gold-600 focus:border-gold-600';
const errorTextClass = 'mt-2 text-xs font-medium text-gold-800';

type FieldProps = {
  label: string;
  id: keyof Fields;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
};

function Field({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className={cn(inputClass, error && errorInputClass)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className={errorTextClass}>
          {error}
        </p>
      )}
    </div>
  );
}
