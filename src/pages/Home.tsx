import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { TrustStrip } from '@/components/home/TrustStrip';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeatureSplit } from '@/components/sections/FeatureSplit';
import { CoreValues } from '@/components/sections/CoreValues';
import { NetworkMap } from '@/components/sections/NetworkMap';
import { FleetPreview } from '@/components/sections/FleetPreview';
import { VehicleGallery } from '@/components/sections/VehicleGallery';
import { ReasonsGrid } from '@/components/sections/ReasonsGrid';
import { LeadershipPreview } from '@/components/sections/LeadershipPreview';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function Home() {
  const t = useT();
  useSeo({ title: t.pages.home.seoTitle, description: t.pages.home.seoDescription });

  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />

      <FeatureSplit
        eyebrow={t.company.welcomeEyebrow}
        title={
          <>
            {t.company.welcomeTitleLead} <Accent>{t.company.welcomeTitleAccent}</Accent>
          </>
        }
        image="/images/senegal-street.jpg"
        imageAlt={t.company.storyImageAlt}
        plate={t.company.headquartersPlate}
      >
        <p>{t.company.welcome}</p>
        <p>{t.company.promise}</p>
        <p className="font-display text-2xl font-bold uppercase tracking-[0.04em] text-ink-950">
          {t.site.tagline}
        </p>
        <div className="pt-2">
          <Button to="/about" variant="ghost">
            {t.actions.moreAboutUs}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </FeatureSplit>

      <CoreValues />
      <NetworkMap />
      <FleetPreview />
      <VehicleGallery />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow={t.reasons.eyebrow}
            title={
              <>
                {t.reasons.homeTitleLead} <Accent>{t.reasons.homeTitleAccent}</Accent>
              </>
            }
            body={t.reasons.intro}
          />
          <div className="mt-12">
            <ReasonsGrid limit={3} />
          </div>
          <div className="mt-10 text-center">
            <Button to="/why-choose-us" variant="ghost" size="lg">
              {t.actions.seeAllReasons}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      <LeadershipPreview />
      <CtaBand />
      <ContactSection />
    </>
  );
}
