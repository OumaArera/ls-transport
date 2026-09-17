import { useState, type ElementType, type FormEvent, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Navigation, Users } from 'lucide-react';
import { useContent, useT } from '@/i18n';
import { cities } from '@/data/network';

/**
 * The quick-quote widget. It does not book anything on its own — it collects
 * the five details every quote needs and hands them to the contact form as
 * query parameters, which pre-fills the enquiry so the visitor never retypes
 * what they have already told us.
 */
export function JourneyPlanner({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const t = useT();
  const { services } = useContent();
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    service: services[0].slug,
    from: '',
    to: '',
    date: '',
    party: '',
  });

  const update = (key: keyof typeof fields, value: string) =>
    setFields((current) => ({ ...current, [key]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    Object.entries(fields).forEach(([key, value]) => {
      if (value.trim()) params.set(key, value.trim());
    });
    navigate(`/contact?${params.toString()}#enquiry`);
  };

  const dark = tone === 'dark';

  return (
    <form
      onSubmit={onSubmit}
      className={
        dark
          ? 'rounded-md border border-white/10 bg-ink-900/80 p-5 shadow-[0_28px_60px_-28px_rgba(0,0,0,0.9)] backdrop-blur sm:p-6'
          : 'rounded-md border border-ink-100 bg-white p-5 shadow-card sm:p-6'
      }
    >
      <div className="mb-5 flex items-center gap-2.5">
        <Navigation className="size-5 text-gold-500" aria-hidden="true" />
        <h2
          className={`font-display text-xl font-extrabold uppercase tracking-[0.06em] ${
            dark ? 'text-white' : 'text-ink-950'
          }`}
        >
          {t.planner.title}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label={t.planner.service} dark={dark}>
          <select
            aria-label={t.planner.service}
            value={fields.service}
            onChange={(event) => update('service', event.target.value)}
            className={inputClass(dark)}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.shortTitle}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t.planner.pickup} dark={dark} icon={MapPin}>
          <input
            aria-label={t.planner.pickupAria}
            list="ls-cities"
            value={fields.from}
            onChange={(event) => update('from', event.target.value)}
            placeholder={t.planner.pickupPlaceholder}
            className={inputClass(dark)}
          />
        </Field>

        <Field label={t.planner.destination} dark={dark} icon={MapPin}>
          <input
            aria-label={t.planner.destination}
            list="ls-cities"
            value={fields.to}
            onChange={(event) => update('to', event.target.value)}
            placeholder={t.planner.destinationPlaceholder}
            className={inputClass(dark)}
          />
        </Field>

        <Field label={t.planner.date} dark={dark} icon={CalendarDays}>
          <input
            aria-label={t.planner.dateAria}
            type="date"
            value={fields.date}
            onChange={(event) => update('date', event.target.value)}
            className={inputClass(dark)}
          />
        </Field>

        <Field label={t.planner.party} dark={dark} icon={Users}>
          <input
            aria-label={t.planner.partyAria}
            value={fields.party}
            onChange={(event) => update('party', event.target.value)}
            placeholder={t.planner.partyPlaceholder}
            className={inputClass(dark)}
          />
        </Field>
      </div>

      <datalist id="ls-cities">
        {cities.map((city) => (
          <option key={city.id} value={city.name} />
        ))}
      </datalist>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gold-500 px-7 py-3 font-display text-lg font-bold uppercase tracking-[0.06em] text-ink-950 shadow-gold transition hover:-translate-y-0.5 hover:bg-gold-400"
        >
          {t.planner.submit}
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
        <p className={`text-xs leading-relaxed ${dark ? 'text-ink-400' : 'text-ink-500'}`}>
          {t.planner.note}
        </p>
      </div>
    </form>
  );
}

const inputClass = (dark: boolean) =>
  [
    'w-full rounded-sm border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 focus:ring-gold-500/30',
    dark
      ? 'border-white/15 bg-ink-950/70 text-white placeholder:text-ink-500 focus:border-gold-500 [color-scheme:dark]'
      : 'border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 focus:border-gold-500',
  ].join(' ');

function Field({
  label,
  dark,
  icon: Icon,
  children,
}: {
  label: string;
  dark: boolean;
  icon?: ElementType;
  children: ReactNode;
}) {
  return (
    <label>
      <span
        className={`mb-1.5 flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.16em] ${
          dark ? 'text-ink-300' : 'text-ink-600'
        }`}
      >
        {Icon && <Icon className="size-3.5 text-gold-500" aria-hidden="true" />}
        {label}
      </span>
      {children}
    </label>
  );
}
