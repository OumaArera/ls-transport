import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { useContent, useT } from '@/i18n';

export function FleetPreview() {
  const t = useT();
  const { fleet } = useContent();

  return (
    <section className="bg-ink-50/70 py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow={t.fleetSection.eyebrow}
          title={
            <>
              {t.fleetSection.titleLead} <Accent>{t.fleetSection.titleAccent}</Accent>
            </>
          }
          body={t.fleetSection.body}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.slice(0, 4).map((vehicle, index) => (
            <Reveal key={vehicle.slug} delay={index * 80} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink-950/75 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-400 backdrop-blur">
                    {t.fleet.categories[vehicle.category]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold uppercase tracking-[0.02em]">
                    {vehicle.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-gold-700">{vehicle.capacity}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{vehicle.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/fleet" variant="ghost" size="lg">
            {t.actions.seeFullFleet}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
