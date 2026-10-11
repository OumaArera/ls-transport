import { useEffect, useState } from 'react';
import { format, useT } from '@/i18n';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { cn } from '@/lib/cn';

type ImageCarouselProps = {
  images: string[];
  alt: string;
  /** Milliseconds each photograph is held. */
  interval?: number;
  /** Stagger, so a row of cards does not flip in lockstep. */
  offset?: number;
  /** Must set the aspect ratio — the slides are absolutely positioned. */
  className?: string;
  eager?: boolean;
};

/**
 * Crossfades through a service's photographs. Pauses on hover and focus, and
 * holds on the first image when the visitor has asked for reduced motion — the
 * dots still work, so nothing is unreachable.
 */
export function ImageCarousel({
  images,
  alt,
  interval = 4200,
  offset = 0,
  className,
  eager = false,
}: ImageCarouselProps) {
  const t = useT();
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused || images.length < 2) return;

    let intervalId = 0;
    const advance = () => setIndex((current) => (current + 1) % images.length);
    const timeoutId = window.setTimeout(() => {
      advance();
      intervalId = window.setInterval(advance, interval);
    }, interval + offset);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [reduced, paused, images.length, interval, offset]);

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, slide) => (
        <img
          key={src}
          src={src}
          alt={slide === index ? alt : ''}
          aria-hidden={slide !== index}
          loading={eager && slide === 0 ? 'eager' : 'lazy'}
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out',
            slide === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
          {images.map((src, slide) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(slide)}
              aria-label={format(t.common.showImage, { number: slide + 1 })}
              aria-current={slide === index}
              className={cn(
                'h-1.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition-all duration-300',
                slide === index ? 'w-5 bg-gold-500' : 'w-1.5 bg-white/70 hover:bg-white',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
