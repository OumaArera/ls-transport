import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useT } from '@/i18n';
import { Header } from './Header';
import { Footer } from './Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  const t = useT();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink-950"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main" className="flex-1 pt-[4.5rem] lg:pt-[8.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
