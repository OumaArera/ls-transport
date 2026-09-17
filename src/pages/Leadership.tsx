import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { LeaderPortrait } from '@/components/sections/LeaderCard';
import { CtaBand } from '@/components/sections/CtaBand';
import { ContactSection } from '@/components/sections/ContactSection';
import { useContent, useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function Leadership() {
  const t = useT();
  const { leadership } = useContent();
  useSeo({
    title: t.pages.leadership.seoTitle,
    description: t.pages.leadership.seoDescription,
  });

  return (
    <>
      <PageHero
        eyebrow={t.pages.leadership.heroEyebrow}
        title={t.pages.leadership.heroTitle}
        body={t.pages.leadership.heroBody}
        crumbs={[{ label: t.nav.leadership }]}
        image="/images/office-meeting.jpg"
        imagePosition="50% 40%"
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow={t.leadership.pageEyebrow}
            title={
              <>
                {t.leadership.pageTitleLead} <Accent>{t.leadership.pageTitleAccent}</Accent>
              </>
            }
            body={t.leadership.pageBody}
          />

          <div className="mt-14 space-y-14 lg:space-y-20">
            {leadership.map((leader, index) => (
              <Reveal key={leader.id}>
                <article id={leader.id} className="grid scroll-mt-40 gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className={index % 2 === 1 ? 'lg:order-2 lg:col-span-4' : 'lg:col-span-4'}>
                    <div className="relative">
                      <div className="aspect-[4/5] overflow-hidden rounded-sm bg-ink-100">
                        <LeaderPortrait leader={leader} />
                      </div>
                      <span
                        className="absolute -bottom-3 -right-3 hidden h-20 w-20 border-b-4 border-r-4 border-gold-500 sm:block"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1 lg:col-span-8' : 'lg:col-span-8'}>
                    <span className="rule-gold" aria-hidden="true" />
                    <h3 className="mt-5 display-tight text-4xl font-extrabold">{leader.name}</h3>
                    <p className="mt-2 font-display text-lg font-bold uppercase tracking-[0.18em] text-gold-700">
                      {leader.role}
                    </p>
                    <p className="mt-3 text-sm font-medium text-ink-500">{leader.focus}</p>

                    <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                      {leader.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand variant="leadership" />
      <ContactSection />
    </>
  );
}
