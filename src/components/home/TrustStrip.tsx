import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { useContent } from '@/i18n';

export function TrustStrip() {
  const { trustFacts } = useContent();

  return (
    <section className="relative z-10 bg-white">
      <Container size="wide">
        <div className="grid divide-y divide-ink-100 border-x border-b border-ink-100 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {trustFacts.map((fact, index) => (
            <Reveal
              key={fact.title}
              delay={index * 70}
              className="group flex gap-4 p-6 transition-colors hover:bg-ink-50/70 lg:p-7"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-gold-50 text-gold-700 transition group-hover:bg-gold-500 group-hover:text-ink-950">
                <fact.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em]">
                  {fact.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{fact.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
