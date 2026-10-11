import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/i18n/LanguageSwitcher';
import { format, useContent, useT } from '@/i18n';
import { TopBar } from './TopBar';
import { contact, navigation, phones, site } from '@/data/site';
import { cn } from '@/lib/cn';

export function Header() {
  const t = useT();
  const { getService } = useContent();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /** "Your Journey. Our Commitment." → two stacked lines, in either language. */
  const taglineLines = t.site.tagline
    .split(/\.\s+/)
    .map((part) => part.replace(/\.$/, '').trim())
    .filter(Boolean)
    .map((part) => `${part}.`);

  const openMenu = (key: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 140);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />

      <div
        className={cn(
          'border-b border-ink-100 bg-white/95 backdrop-blur transition-shadow duration-300',
          scrolled && 'shadow-[0_10px_34px_-20px_rgba(15,16,20,0.6)]',
        )}
      >
        <Container size="wide">
          <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-24">
            <Link
              to="/"
              aria-label={`${site.name} — ${t.site.tagline}`}
              className="flex shrink-0 items-center gap-3"
            >
              <img
                src={site.logo}
                alt=""
                className="h-11 w-auto lg:h-14"
                width={520}
                height={287}
              />
              {/* The strapline is set in live type rather than baked into the
                  logo bitmap, where it was unreadable at this size. */}
              <span
                className="hidden border-l border-ink-200 pl-3 font-display text-[10px] font-bold uppercase leading-[1.35] tracking-[0.18em] text-gold-700 sm:block lg:text-[11px]"
                aria-hidden="true"
              >
                {taglineLines.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-0.5 lg:flex" aria-label={t.common.mainNav}>
              {navigation.map((item) =>
                item.children ? (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => openMenu(item.key)}
                    onMouseLeave={scheduleClose}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => cn(navLinkClass, isActive && activeLinkClass)}
                      aria-expanded={openDropdown === item.key}
                      aria-haspopup="true"
                      onFocus={() => openMenu(item.key)}
                    >
                      {t.nav[item.key]}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-200',
                          openDropdown === item.key && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </NavLink>

                    <div
                      className={cn(
                        'absolute left-0 top-full w-[23rem] origin-top-left pt-3 transition-all duration-200',
                        openDropdown === item.key
                          ? 'visible scale-100 opacity-100'
                          : 'invisible scale-95 opacity-0',
                      )}
                    >
                      <ul className="overflow-hidden rounded-md border border-ink-100 bg-white py-2 shadow-[0_26px_52px_-22px_rgba(15,16,20,0.5)]">
                        {item.children.map((slug) => (
                          <li key={slug}>
                            <NavLink
                              to={`/services/${slug}`}
                              className={({ isActive }) =>
                                cn(
                                  'block border-l-2 px-4 py-2.5 text-sm font-medium transition',
                                  isActive
                                    ? 'border-gold-500 bg-gold-50 text-gold-800'
                                    : 'border-transparent text-ink-700 hover:border-gold-500 hover:bg-ink-50 hover:text-gold-800',
                                )
                              }
                            >
                              {getService(slug)?.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.key}
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) => cn(navLinkClass, isActive && activeLinkClass)}
                  >
                    {t.nav[item.key]}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden xl:block">
                <Button to="/contact">{t.actions.getQuote}</Button>
              </div>
              <a
                href={phones[0] ? phones[0].href : `mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-sm bg-ink-950 px-3 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-ink-800 lg:hidden"
              >
                {phones[0] ? (
                  <Phone className="size-4" aria-hidden="true" />
                ) : (
                  <Mail className="size-4" aria-hidden="true" />
                )}
                <span className="hidden sm:inline">
                  {phones[0] ? t.actions.call : t.actions.email}
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className="inline-flex size-11 items-center justify-center rounded-sm border border-ink-200 text-ink-950 transition hover:border-gold-500 hover:text-gold-700 lg:hidden"
                aria-label={mobileOpen ? t.common.closeMenu : t.common.openMenu}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

const navLinkClass =
  'inline-flex items-center gap-1 rounded-sm px-3 py-2 font-display text-[15px] font-bold uppercase tracking-[0.06em] text-ink-800 transition hover:text-gold-700';
const activeLinkClass = 'text-gold-700';

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const { getService } = useContent();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label={t.common.siteMenu}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <LanguageSwitcher tone="light" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-sm border border-ink-200 text-ink-700 transition hover:border-gold-500 hover:text-gold-700"
            aria-label={t.common.closeMenu}
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label={t.common.mobileNav}>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.key}>
                <div className="flex items-center">
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex-1 rounded-sm px-3 py-3 font-display text-lg font-bold uppercase tracking-wide transition',
                        isActive ? 'bg-gold-50 text-gold-800' : 'text-ink-900 hover:bg-ink-50',
                      )
                    }
                  >
                    {t.nav[item.key]}
                  </NavLink>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded((current) => (current === item.key ? null : item.key))
                      }
                      className="inline-flex size-9 items-center justify-center rounded-sm text-ink-500 transition hover:text-gold-700"
                      aria-label={format(t.common.toggleSubmenu, { label: t.nav[item.key] })}
                      aria-expanded={expanded === item.key}
                    >
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform',
                          expanded === item.key && 'rotate-180',
                        )}
                      />
                    </button>
                  )}
                </div>

                {item.children && expanded === item.key && (
                  <ul className="mb-2 ml-3 space-y-1 border-l-2 border-ink-100 pl-3">
                    {item.children.map((slug) => (
                      <li key={slug}>
                        <NavLink
                          to={`/services/${slug}`}
                          onClick={onClose}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-sm px-3 py-2.5 text-sm font-medium transition',
                              isActive ? 'text-gold-800' : 'text-ink-600 hover:text-gold-800',
                            )
                          }
                        >
                          {getService(slug)?.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-ink-100 p-5">
          <Button to="/contact" className="w-full" onClick={onClose}>
            {t.actions.getQuote}
          </Button>
          {phones[0] ? (
            <a
              href={phones[0].href}
              className="flex items-center justify-center gap-2 rounded-sm border-2 border-ink-200 px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-ink-950 transition hover:border-gold-500 hover:text-gold-700"
            >
              <Phone className="size-4" aria-hidden="true" />
              {phones[0].display}
            </a>
          ) : (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-2 rounded-sm border-2 border-ink-200 px-4 py-3 font-display text-base font-bold uppercase tracking-wide text-ink-950 transition hover:border-gold-500 hover:text-gold-700"
            >
              <Mail className="size-4" aria-hidden="true" />
              {t.actions.emailUs}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
