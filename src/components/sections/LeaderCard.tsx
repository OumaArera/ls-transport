import type { Leader } from '@/i18n';
import { cn } from '@/lib/cn';

/** Shared portrait plate — a photo when we have one, branded initials when not. */
export function LeaderPortrait({ leader, className }: { leader: Leader; className?: string }) {
  if (leader.photo) {
    return (
      <img
        src={leader.photo}
        alt={`${leader.name}, ${leader.role}`}
        className={cn('size-full object-cover object-[50%_18%]', className)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={cn(
        'relative flex size-full items-center justify-center bg-gradient-to-br from-ink-800 via-ink-950 to-ink-950',
        className,
      )}
      role="img"
      aria-label={`${leader.name}, ${leader.role}`}
    >
      <span
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(231,173,46,0.35) 0px, rgba(231,173,46,0.35) 1px, transparent 1px, transparent 14px)',
        }}
      />
      <span className="relative flex size-28 items-center justify-center rounded-full border-2 border-gold-500/50 bg-ink-950/60">
        <span className="display-tight text-4xl font-extrabold tracking-[0.04em] text-gold-400">
          {leader.initials}
        </span>
      </span>
    </div>
  );
}
