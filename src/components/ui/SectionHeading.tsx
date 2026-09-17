import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'center',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div
          className={cn(
            'mb-3 flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.25em]',
            centered && 'justify-center',
            tone === 'dark' ? 'text-gold-700' : 'text-gold-400',
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
          {centered && <span className="h-px w-8 bg-current" aria-hidden="true" />}
        </div>
      )}
      <h2
        className={cn(
          'display-tight text-4xl font-extrabold sm:text-5xl',
          tone === 'light' && 'text-white',
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed',
            tone === 'dark' ? 'text-ink-600' : 'text-ink-200',
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}

/** Gold-highlighted second half of a split section title. */
export function Accent({
  children,
  tone = 'dark',
}: {
  children: ReactNode;
  tone?: 'dark' | 'light';
}) {
  return <span className={tone === 'dark' ? 'text-gold-600' : 'text-gold-400'}>{children}</span>;
}
