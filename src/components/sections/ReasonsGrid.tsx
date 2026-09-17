import { Reveal } from '@/components/ui/Reveal';
import { useContent } from '@/i18n';

export function ReasonsGrid({ limit }: { limit?: number }) {
  const { reasons } = useContent();
  const items = limit ? reasons.slice(0, limit) : reasons;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((reason, index) => (
        <Reveal
          key={reason.title}
          delay={index * 70}
          className="group relative h-full overflow-hidden rounded-sm border border-ink-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
        >
          <span
            className="pointer-events-none absolute -right-2 -top-6 font-display text-8xl font-extrabold text-ink-50 transition group-hover:text-gold-50"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="relative inline-flex size-12 items-center justify-center rounded-sm bg-gold-500 text-ink-950">
            <reason.icon className="size-6" aria-hidden="true" />
          </span>
          <h3 className="relative mt-5 font-display text-2xl font-bold uppercase tracking-[0.02em]">
            {reason.title}
          </h3>
          <p className="relative mt-3 text-sm leading-relaxed text-ink-600">{reason.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
