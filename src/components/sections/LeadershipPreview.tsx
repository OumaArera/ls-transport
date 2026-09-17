import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { format, useContent, useT } from '@/i18n';
import { LeaderPortrait } from './LeaderCard';

export function LeadershipPreview() {
  const t = useT();
  const { leadership } = useContent();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <SectionHeading
          eyebrow={t.leadership.eyebrow}
          title={
            <>
              {t.leadership.homeTitleLead} <Accent>{t.leadership.homeTitleAccent}</Accent>
            </>
          }
          body={t.leadership.homeBody}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((leader, index) => (
            <Reveal key={leader.id} delay={index * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <LeaderPortrait
                    leader={leader}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gold-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[0.02em]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.18em] text-gold-700">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">{leader.bio[0]}</p>
                  <Link
                    to="/leadership"
                    className="mt-5 inline-flex items-center gap-2 self-start font-display text-base font-bold uppercase tracking-[0.06em] text-ink-950 transition hover:gap-3 hover:text-gold-700"
                  >
                    {t.actions.readProfile}
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">
                      {format(t.actions.readProfileFor, { name: leader.name })}
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/leadership" variant="ghost" size="lg">
            {t.actions.meetTeam}
          </Button>
        </div>
      </Container>
    </section>
  );
}
