import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CtaBand } from '@/components/sections/CtaBand';
import { useContent, useT } from '@/i18n';
import { fleetCategories } from '@/data/fleet';
import { cn } from '@/lib/cn';
import { useSeo } from '@/lib/useSeo';

export default function Fleet() {
  const t = useT();
  const { fleet, fleetStandards } = useContent();
  const [category, setCategory] = useState<(typeof fleetCategories)[number]>('all');
  useSeo({ title: t.pages.fleet.seoTitle, description: t.pages.fleet.seoDescription });

  const visible = category === 'all' ? fleet : fleet.filter((item) => item.category === category);

  return (
    <>
      <PageHero
        eyebrow={t.pages.fleet.heroEyebrow}
        title={t.pages.fleet.heroTitle}
        body={t.fleet.intro}
        crumbs={[{ label: t.nav.fleet }]}
        image="/images/services/corporate.jpg"
        imagePosition="50% 55%"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading eyebrow={t.fleet.eyebrow} title={t.fleet.heading} />

          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t.fleet.filterLabel}
          >
            {fleetCategories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={cn(
                  'rounded-sm border-2 px-5 py-2 font-display text-base font-bold uppercase tracking-[0.06em] transition',
                  category === item
                    ? 'border-gold-500 bg-gold-500 text-ink-950'
                    : 'border-ink-200 text-ink-700 hover:border-gold-500 hover:text-gold-700',
                )}
              >
                {t.fleet.categories[item]}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((vehicle, index) => (
              <Reveal key={vehicle.slug} delay={index * 70} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative aspect-[5/4] overflow-hidden bg-ink-900">
                    <img
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/75 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-gold-400 backdrop-blur">
                      <vehicle.icon className="size-3.5" aria-hidden="true" />
                      {t.fleet.categories[vehicle.category]}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="display-tight text-2xl font-extrabold">{vehicle.name}</h3>
                    <p className="mt-1.5 font-semibold text-gold-700">{vehicle.capacity}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{vehicle.summary}</p>

                    <div className="mt-5 border-t border-ink-100 pt-5">
                      <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ink-500">
                        {t.fleet.bestFor}
                      </h4>
                      <ul className="mt-3 space-y-1.5">
                        {vehicle.bestFor.map((use) => (
                          <li key={use} className="flex items-start gap-2 text-sm text-ink-700">
                            <Check
                              className="mt-0.5 size-4 shrink-0 text-gold-600"
                              aria-hidden="true"
                            />
                            {use}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {vehicle.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-full border border-ink-200 px-2.5 py-0.5 text-xs text-ink-600"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink-500">
            {t.fleet.capacityNote}
          </p>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            tone="light"
            eyebrow={t.fleet.standardsEyebrow}
            title={
              <>
                {t.fleet.standardsTitleLead}{' '}
                <Accent tone="light">{t.fleet.standardsTitleAccent}</Accent>
              </>
            }
            body={t.fleet.standardsBody}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {fleetStandards.map((standard, index) => (
              <Reveal key={standard.title} delay={index * 90}>
                <article className="overflow-hidden rounded-sm border border-ink-800 bg-ink-900/50">
                  <img
                    src={standard.image}
                    alt=""
                    aria-hidden="true"
                    className="aspect-[16/9] w-full object-cover opacity-80"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold uppercase tracking-[0.02em] text-white">
                      {standard.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-300">{standard.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              {t.actions.checkAvailability}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
