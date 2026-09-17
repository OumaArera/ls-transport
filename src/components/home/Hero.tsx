import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AsphaltTexture } from '@/components/ui/Texture';
import { useContent, useT } from '@/i18n';
import { JourneyPlanner } from './JourneyPlanner';
import { cn } from '@/lib/cn';

const ROTATE_MS = 7000;

export function Hero() {
  const t = useT();
  const { heroSlides } = useContent();
  const [active, setActive] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    timer.current = window.setInterval(
      () => setActive((index) => (index + 1) % heroSlides.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(timer.current);
  }, [heroSlides.length]);

  const slide = heroSlides[active];
  const SlideIcon = slide.icon;

  return (
    <section className="relative overflow-hidden bg-ink-950">
      <img
        src="/images/hero-coach.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 size-full scale-105 object-cover object-[62%_58%] opacity-[0.68]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink-950/50 lg:hidden" aria-hidden="true" />
      <AsphaltTexture />
      <div
        className="absolute -left-40 top-10 size-[520px] rounded-full bg-gold-500/15 blur-[130px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-10 pb-10 pt-16 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-12 lg:pt-24">
          <div className="lg:col-span-7">
            <div
              key={`eyebrow-${active}`}
              className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.22em] text-gold-400"
            >
              <SlideIcon className="size-4" aria-hidden="true" />
              {slide.eyebrow}
            </div>

            <h1
              key={`title-${active}`}
              className="reveal is-visible display-tight text-5xl font-extrabold text-white sm:text-6xl lg:text-7xl"
            >
              {slide.titleLead}
              <br />
              <span className="text-gold-400">{slide.titleAccent}</span>
            </h1>

            <p
              key={`body-${active}`}
              className="reveal is-visible mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg"
              style={{ animationDelay: '90ms' }}
            >
              {slide.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact" size="lg">
                {t.actions.requestQuote}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                {t.actions.exploreServices}
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-gold-500" aria-hidden="true" />
                {t.site.serviceArea}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-gold-500" aria-hidden="true" />
                {t.site.hours}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
              <div
                className="absolute -inset-px rounded-md bg-gradient-to-br from-gold-500/40 to-transparent"
                aria-hidden="true"
              />
              <blockquote className="relative rounded-md border border-white/10 bg-ink-900/70 p-7 backdrop-blur-sm">
                <p className="display-tight text-3xl font-extrabold text-white sm:text-4xl">
                  {t.site.tagline}
                </p>
                <footer className="mt-4 border-t border-white/10 pt-4 text-sm text-ink-300">
                  <span
                    className="block font-display uppercase tracking-[0.22em] text-gold-400"
                    lang={t.code === 'en' ? 'fr' : 'en'}
                  >
                    {t.site.taglineAlt}
                  </span>
                  <span className="mt-2 block leading-relaxed">{t.hero.promiseNote}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="flex items-center gap-3 pb-10" role="tablist" aria-label={t.hero.slidesLabel}>
          {heroSlides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={item.eyebrow}
              onClick={() => {
                window.clearInterval(timer.current);
                setActive(index);
              }}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                index === active ? 'w-12 bg-gold-500' : 'w-6 bg-white/25 hover:bg-white/50',
              )}
            />
          ))}
        </div>

        <div className="relative z-10 pb-12 lg:pb-16">
          <JourneyPlanner />
        </div>
      </Container>
    </section>
  );
}
