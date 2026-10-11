import { Container } from '@/components/ui/Container';
import { Accent, SectionHeading } from '@/components/ui/SectionHeading';
import { useT } from '@/i18n';
import { galleryImages } from '@/data/fleet';

/**
 * A continuously scrolling strip of fleet photography. The list is rendered
 * twice so the loop is seamless; the copy is hidden from assistive tech. The
 * animation pauses on hover, and under reduced motion the strip becomes an
 * ordinary horizontally scrollable row.
 */
export function VehicleGallery() {
  const t = useT();

  return (
    <section className="overflow-hidden bg-ink-950 py-16 sm:py-20">
      <Container size="wide">
        <SectionHeading
          tone="light"
          eyebrow={t.gallery.eyebrow}
          title={
            <>
              {t.gallery.titleLead} <Accent tone="light">{t.gallery.titleAccent}</Accent>
            </>
          }
          body={t.gallery.body}
        />
      </Container>

      <div className="marquee relative mt-12 flex w-full">
        <span
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent sm:w-28"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent sm:w-28"
          aria-hidden="true"
        />

        <ul className="marquee-track flex shrink-0 gap-4 pr-4" aria-label={t.gallery.scrollLabel}>
          {galleryImages.map((src) => (
            <li key={src} className="w-64 shrink-0 sm:w-80">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover grayscale-[0.25] transition duration-500 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
        <ul className="marquee-track flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {galleryImages.map((src) => (
            <li key={`${src}-copy`} className="w-64 shrink-0 sm:w-80">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover grayscale-[0.25] transition duration-500 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
