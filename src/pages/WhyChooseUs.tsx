import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { ReasonsGrid } from '@/components/sections/ReasonsGrid';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { NetworkMap } from '@/components/sections/NetworkMap';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function WhyChooseUs() {
  const t = useT();
  useSeo({
    title: t.pages.whyChooseUs.seoTitle,
    description: t.pages.whyChooseUs.seoDescription,
  });

  return (
    <>
      <PageHero
        eyebrow={t.pages.whyChooseUs.heroEyebrow}
        title={t.pages.whyChooseUs.heroTitle}
        body={t.reasons.intro}
        crumbs={[{ label: t.nav.whyChooseUs }]}
        image="/images/driver-cabin.jpg"
        imagePosition="50% 30%"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow={t.reasons.pageEyebrow}
            title={
              <>
                {t.reasons.pageTitleLead} <Accent>{t.reasons.pageTitleAccent}</Accent>
              </>
            }
          />
          <div className="mt-12">
            <ReasonsGrid />
          </div>
        </Container>
      </section>

      <FeatureSplit
        tone="dark"
        eyebrow={t.reasons.safetyEyebrow}
        title={
          <>
            {t.reasons.safetyTitleLead}{' '}
            <Accent tone="light">{t.reasons.safetyTitleAccent}</Accent>
          </>
        }
        image="/images/maintenance.jpg"
        imageAlt={t.reasons.safetyImageAlt}
      >
        {t.reasons.safetyBody.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </FeatureSplit>

      <NetworkMap />
      <CtaBand variant="compare" />
      <ContactSection />
    </>
  );
}
