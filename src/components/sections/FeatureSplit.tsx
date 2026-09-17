import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

type FeatureSplitProps = {
  eyebrow?: string;
  title: ReactNode;
  image: string;
  imageAlt: string;
  /** Put the photograph on the right instead of the left. */
  reverse?: boolean;
  tone?: 'light' | 'dark';
  /** Small caption plate anchored over the image. */
  plate?: { value: string; label: string };
  children: ReactNode;
  className?: string;
};

export function FeatureSplit({
  eyebrow,
  title,
  image,
  imageAlt,
  reverse = false,
  tone = 'light',
  plate,
  children,
  className,
}: FeatureSplitProps) {
  const dark = tone === 'dark';

  return (
    <section
      className={cn('py-16 sm:py-20 lg:py-24', dark ? 'bg-ink-950' : 'bg-white', className)}
    >
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className={cn('relative', reverse && 'lg:order-2')}>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <span
              className="absolute -bottom-3 -right-3 hidden h-24 w-24 border-b-4 border-r-4 border-gold-500 sm:block"
              aria-hidden="true"
            />
            {plate && (
              <div className="absolute -bottom-6 left-6 rounded-sm bg-gold-500 px-5 py-4 text-ink-950 shadow-lift sm:left-8">
                <span className="block font-display text-3xl font-extrabold leading-none">
                  {plate.value}
                </span>
                <span className="mt-1 block font-display text-xs font-bold uppercase tracking-[0.18em]">
                  {plate.label}
                </span>
              </div>
            )}
          </Reveal>

          <Reveal delay={110} className={cn(reverse && 'lg:order-1')}>
            {eyebrow && (
              <div
                className={cn(
                  'mb-3 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.25em]',
                  dark ? 'text-gold-400' : 'text-gold-700',
                )}
              >
                <span className="h-px w-8 bg-current" aria-hidden="true" />
                {eyebrow}
              </div>
            )}
            <h2
              className={cn(
                'display-tight text-4xl font-extrabold sm:text-5xl',
                dark && 'text-white',
              )}
            >
              {title}
            </h2>
            <div
              className={cn(
                'mt-5 space-y-4 text-base leading-relaxed',
                dark ? 'text-ink-300' : 'text-ink-600',
              )}
            >
              {children}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
