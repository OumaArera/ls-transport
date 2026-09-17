import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { CoreValues } from '@/components/sections/CoreValues';
import { NetworkMap } from '@/components/sections/NetworkMap';
import { LeadershipPreview } from '@/components/sections/LeadershipPreview';
import { CtaBand } from '@/components/sections/CtaBand';
import { useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function About() {
  const t = useT();
  useSeo({ title: t.pages.about.seoTitle, description: t.pages.about.seoDescription });

  return (
    <>
      <PageHero
        eyebrow={t.pages.about.heroEyebrow}
        title={t.pages.about.heroTitle}
        body={t.pages.about.heroBody}
        crumbs={[{ label: t.nav.about }]}
        image="/images/dakar-city.jpg"
        imagePosition="50% 35%"
      />

      <FeatureSplit
        eyebrow={t.company.whoWeAreEyebrow}
        title={
          <>
            {t.company.whoWeAreTitleLead} <Accent>{t.company.whoWeAreTitleAccent}</Accent>
          </>
        }
        image="/images/dakar-taxi.jpg"
        imageAlt={t.company.storyImageAlt}
        plate={t.company.regionsPlate}
      >
        {t.company.story.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </FeatureSplit>

      <section className="bg-ink-50/70 py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow={t.company.commitmentEyebrow}
            title={
              <>
                {t.company.commitmentTitleLead} <Accent>{t.company.commitmentTitleAccent}</Accent>
              </>
            }
            body={t.company.commitmentBody}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.company.commitments.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="relative rounded-sm border border-ink-100 bg-white p-7 shadow-card"
              >
                <span className="rule-gold" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CoreValues />

      <FeatureSplit
        tone="dark"
        reverse
        eyebrow={t.company.howWeWorkEyebrow}
        title={
          <>
            {t.company.howWeWorkTitleLead}{' '}
            <Accent tone="light">{t.company.howWeWorkTitleAccent}</Accent>
          </>
        }
        image="/images/driver.jpg"
        imageAlt={t.company.howWeWorkImageAlt}
      >
        {t.company.howWeWork.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <p className="font-display text-xl uppercase tracking-[0.18em] text-gold-400">
          {t.site.tagline}
        </p>
      </FeatureSplit>

      <NetworkMap />
      <LeadershipPreview />
      <CtaBand />
    </>
  );
}
