import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AsphaltTexture, LaneMarking } from '@/components/ui/Texture';
import { useT } from '@/i18n';
import { contact, phones } from '@/data/site';

type Variant = 'default' | 'compare' | 'leadership';

export function CtaBand({ variant = 'default' }: { variant?: Variant }) {
  const t = useT();
  const copy = {
    default: { title: t.cta.defaultTitle, body: t.cta.defaultBody },
    compare: { title: t.cta.compareTitle, body: t.cta.compareBody },
    leadership: { title: t.cta.leadershipTitle, body: t.cta.leadershipBody },
  }[variant];

  return (
    <section className="relative overflow-hidden bg-ink-900">
      <AsphaltTexture />
      <LaneMarking className="bottom-0 text-gold-500/50" />
      <div
        className="absolute -left-20 top-0 size-80 rounded-full bg-gold-500/15 blur-[100px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="flex flex-col items-start gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div className="max-w-2xl">
            <h2 className="display-tight text-4xl font-extrabold text-white sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-300">{copy.body}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button to="/contact" size="lg">
              {t.actions.requestQuote}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            {phones[0] ? (
              <Button href={phones[0].href} variant="outline" size="lg">
                <Phone className="size-5" aria-hidden="true" />
                {phones[0].display}
              </Button>
            ) : (
              <Button href={`mailto:${contact.email}`} variant="outline" size="lg">
                <Mail className="size-5" aria-hidden="true" />
                {t.actions.emailUs}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
