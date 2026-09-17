import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AsphaltTexture, LaneMarking } from '@/components/ui/Texture';
import { useT } from '@/i18n';
import { useSeo } from '@/lib/useSeo';

export default function NotFound() {
  const t = useT();
  useSeo({ title: t.pages.notFound.seoTitle });

  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <AsphaltTexture />
      <LaneMarking className="bottom-10 text-gold-500/40" />
      <Container className="relative text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-gold-400">
          {t.pages.notFound.code}
        </p>
        <h1 className="mt-4 display-tight text-5xl font-extrabold text-white sm:text-6xl">
          {t.pages.notFound.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
          {t.pages.notFound.body}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            {t.actions.backHome}
          </Button>
          <Button to="/services" variant="outline" size="lg">
            {t.actions.browseServices}
          </Button>
        </div>
      </Container>
    </section>
  );
}
