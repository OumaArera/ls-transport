import { useMemo, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { AsphaltTexture } from '@/components/ui/Texture';
import { Accent } from '@/components/ui/SectionHeading';
import { useContent, useT } from '@/i18n';
import { cities, project, regions } from '@/data/network';
import { cn } from '@/lib/cn';

const W = 1000;
const H = 714;

/**
 * A schematic of the road corridors LS Transport runs. City markers sit at
 * their real coordinates, projected onto the viewBox, so the diagram keeps
 * Senegal's true relative geography — it is a route diagram, not a survey map.
 */
export function NetworkMap() {
  const t = useT();
  const { corridors } = useContent();
  const [activeCorridor, setActiveCorridor] = useState<string | null>(null);

  const points = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    cities.forEach((city) => map.set(city.id, project(city, W, H)));
    return map;
  }, []);

  const pathFor = (ids: string[]) =>
    ids
      .map((id, index) => {
        const point = points.get(id)!;
        return `${index === 0 ? 'M' : 'L'} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
      })
      .join(' ');

  const activeCities = useMemo(() => {
    if (!activeCorridor) return null;
    const corridor = corridors.find((item) => item.id === activeCorridor);
    return corridor ? new Set(corridor.path) : null;
  }, [activeCorridor, corridors]);

  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 sm:py-20 lg:py-24">
      <AsphaltTexture />
      <div
        className="absolute -right-24 top-24 size-[460px] rounded-full bg-gold-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <SectionHeading
          tone="light"
          eyebrow={t.network.eyebrow}
          title={
            <>
              {t.network.titleLead}{' '}
              <Accent tone="light">{t.network.titleAccent}</Accent>
            </>
          }
          body={t.network.body}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <ul className="space-y-2.5">
              {corridors.map((corridor) => {
                const isActive = activeCorridor === corridor.id;
                return (
                  <li key={corridor.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveCorridor(corridor.id)}
                      onMouseLeave={() => setActiveCorridor(null)}
                      onFocus={() => setActiveCorridor(corridor.id)}
                      onBlur={() => setActiveCorridor(null)}
                      onClick={() =>
                        setActiveCorridor((current) =>
                          current === corridor.id ? null : corridor.id,
                        )
                      }
                      aria-pressed={isActive}
                      className={cn(
                        'w-full rounded-sm border p-4 text-left transition duration-200',
                        isActive
                          ? 'border-gold-500/70 bg-gold-500/10'
                          : 'border-ink-800 bg-ink-900/50 hover:border-ink-700',
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            'h-0.5 w-6 shrink-0 rounded-full transition',
                            isActive ? 'bg-gold-400' : 'bg-ink-600',
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            'font-display text-lg font-bold uppercase tracking-[0.06em] transition',
                            isActive ? 'text-gold-400' : 'text-white',
                          )}
                        >
                          {corridor.name}
                        </span>
                      </span>
                      <span className="mt-2 block pl-9 text-sm leading-relaxed text-ink-300">
                        {corridor.description}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 rounded-sm border border-ink-800 bg-ink-900/50 p-4">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-gold-400">
                {t.network.regionsTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="rounded-full border border-ink-700 px-2.5 py-1 text-xs text-ink-300"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-sm border border-ink-800 bg-ink-900/40 p-4 sm:p-6">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
                aria-label={t.network.mapLabel}
              >
                <defs>
                  <pattern id="ls-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width={W} height={H} fill="url(#ls-grid)" />

                {/* Corridors */}
                {corridors.map((corridor) => {
                  const d = pathFor(corridor.path);
                  const isActive = activeCorridor === corridor.id;
                  const dimmed = activeCorridor !== null && !isActive;
                  return (
                    <g key={corridor.id} opacity={dimmed ? 0.18 : 1}>
                      <path
                        d={d}
                        fill="none"
                        stroke={isActive ? '#e7ad2e' : '#525461'}
                        strokeWidth={isActive ? 7 : 5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      {isActive && (
                        <path
                          d={d}
                          fill="none"
                          stroke="#0f1014"
                          strokeWidth="2"
                          strokeDasharray="16 20"
                          strokeLinecap="round"
                          className="lane-dash"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Cities */}
                {cities.map((city) => {
                  const point = points.get(city.id)!;
                  const highlighted = activeCities ? activeCities.has(city.id) : city.hub;
                  return (
                    <g key={city.id}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={city.hub ? 9 : 6}
                        fill={highlighted ? '#e7ad2e' : '#1c1d23'}
                        stroke={highlighted ? '#fdf9ed' : '#858894'}
                        strokeWidth={city.hub ? 3 : 2}
                        className="transition-all duration-300"
                      />
                      <text
                        x={point.x + city.label.dx}
                        y={point.y + city.label.dy}
                        textAnchor={city.label.anchor}
                        className="font-display"
                        fontSize={city.hub ? 25 : 21}
                        fontWeight={city.hub ? 700 : 600}
                        letterSpacing="0.04em"
                        fill={highlighted ? '#fdf9ed' : '#858894'}
                      >
                        {city.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <p className="mt-4 border-t border-ink-800 pt-4 text-xs leading-relaxed text-ink-400">
                {t.network.note}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
