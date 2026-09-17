import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useContent, useT } from '@/i18n';

export function CoreValues() {
  const t = useT();
  const { values } = useContent();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow={t.company.valuesEyebrow}
          title={
            <>
              {t.company.valuesTitleLead} <Accent>{t.company.valuesTitleAccent}</Accent>
            </>
          }
          body={t.company.valuesBody}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-sm border border-ink-100 bg-ink-50/60 p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-700">
              {t.company.missionTitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-700">{t.company.mission}</p>
          </Reveal>
          <Reveal delay={90} className="rounded-sm border border-ink-100 bg-ink-50/60 p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-700">
              {t.company.visionTitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-700">{t.company.vision}</p>
          </Reveal>
          <Reveal delay={180} className="relative overflow-hidden rounded-sm bg-ink-950 p-7">
            <span
              className="absolute -right-10 -top-10 size-40 rounded-full bg-gold-500/15 blur-2xl"
              aria-hidden="true"
            />
            <h3 className="relative font-display text-sm font-bold uppercase tracking-[0.25em] text-gold-400">
              {t.company.sloganTitle}
            </h3>
            <p className="relative mt-4 display-tight text-3xl font-extrabold text-white">
              {t.site.tagline}
            </p>
            <p
              className="relative mt-3 font-display text-sm uppercase tracking-[0.22em] text-ink-400"
              lang={t.code === 'en' ? 'fr' : 'en'}
            >
              {t.site.taglineAlt}
            </p>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 80}
              className="group rounded-sm border border-ink-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-sm bg-ink-950 text-gold-400 transition group-hover:bg-gold-500 group-hover:text-ink-950">
                <value.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-[0.04em]">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
