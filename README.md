# LS Transport — Senegal

Marketing website for **LS Transport**, a Senegal-based transport company
providing passenger mobility, cargo movement, and corporate transport solutions
nationwide.

> **Your Journey. Our Commitment.** · *Votre voyage. Notre engagement.*

Bilingual (English / French), built with React 18, TypeScript, Vite 6,
Tailwind CSS v4, React Router 6 and lucide-react — the same stack as the Sound
Fire & Safety site.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
npm run lint       # typecheck only
```

## Before launch — content the client must confirm

Everything below is flagged with a `TODO` comment at the source.

| What | Where | Status |
| --- | --- | --- |
| **Phone numbers** | `src/data/site.ts` → `phones` | **Empty on purpose.** The content document left the number blank, so rather than publish a fake number the whole site degrades to email-only contact. Add entries to `phones` and every phone CTA (top bar, mobile header, footer, contact page, CTA band) switches on automatically. |
| **Email address** | `src/data/site.ts` → `contact.email` | `info@lstransport.sn` is a placeholder built from the company name. |
| **Public domain** | `src/data/site.ts` → `site.url`, plus `index.html`, `public/sitemap.xml`, `public/robots.txt` | `https://www.lstransport.sn` is assumed. |
| **Street address** | `src/data/site.ts` → `contact.address` | The document gave only "Dakar, Senegal". Add street and district when known. |
| **Fleet capacities** | `src/data/fleet.ts` | Vehicle *classes* with typical capacity ranges. Confirm the real models, seat counts, and payloads. |
| **Photography** | `public/images/` | Licensed stock (see `public/images/CREDITS.md`). Swap in LS Transport's own vehicles and crews when available — the filenames can stay the same. |
| **French copy** | `src/i18n/fr.ts` | Translated in-house, not by a native Senegalese copywriter. Worth a read-through before launch. |

## Structure

```
src/
  i18n/          en.ts + fr.ts (ALL copy), provider, switcher, geo detection
  data/          language-independent structure — slugs, icons, photo paths,
                 phone numbers, map coordinates
  lib/           cn() class helper, useSeo() per-route meta
  components/
    ui/          Button, Container, SectionHeading, PageHero, Reveal, Texture
    layout/      Header (+ TopBar), Footer, Layout
    home/        Hero, JourneyPlanner, TrustStrip, ServicesSection
    sections/    reusable page sections (values, reasons, fleet, network map,
                 leadership, CTA band, contact form)
  pages/         one file per route
```

**All copy lives in `src/i18n/en.ts` and `src/i18n/fr.ts`** — every heading,
button, error message and bio. Nothing is hard-coded in a component, so the
client can be handed those two files to edit side by side. `fr.ts` is typed as
`Dictionary` (derived from `en.ts`), so **the build fails if a translation is
missing or a key is misspelled** — you cannot ship a half-translated page.

`src/data/` holds only what does not translate: slugs, lucide icons, image
paths, map coordinates, phone numbers. `buildContent()` in `src/i18n/content.ts`
joins the two, once per language change.

### Routes

`/` · `/about` · `/services` · `/services/:slug` (4 services) · `/fleet` ·
`/why-choose-us` · `/leadership` · `/contact` · 404

## Languages

The site ships in English and French, with an EN / FR switcher in the top bar,
the mobile menu, and the footer.

**How the default is chosen**, highest authority first:

1. **`?lang=en` / `?lang=fr` in the URL** — so a shared link always opens in the
   language it was shared in. The switcher writes this back into the URL.
2. **A previous choice**, saved in `localStorage`. A visitor who switches once is
   never switched back.
3. **The visitor's country, by IP** — Senegal and the other francophone markets
   get French. Officially multilingual countries (Belgium, Switzerland, Canada,
   Luxembourg…) defer to the browser instead, so a Flemish or German speaker is
   not forced into French. The country list is in `src/i18n/geo.ts`.
4. **`navigator.language`** — applied immediately so there is no flash of the
   wrong language while the IP lookup is in flight.
5. English.

The IP lookup is asynchronous, capped at 3.5 seconds, cached for seven days, and
fails silently: if it is blocked, rate-limited or offline, the site simply keeps
the browser-based guess. Only the two-letter country code is ever stored.

By default it calls `https://get.geojs.io/v1/ip/country.json` (free, no key).
**For production, prefer your host's own geo header** — faster, private, and no
quota. `.env.example` has a copy-paste Vercel edge function; point
`VITE_GEO_ENDPOINT` at it.

`<html lang>` and `og:locale` follow the active language, and `index.html`
carries `hreflang` alternates. If the client later wants French on its own URLs
(`/fr/...`) for stronger SEO, the dictionary layer is already in place — only
routing would change.

## Two things worth knowing

**The journey planner.** The hero (and the contact page) carries a quick-quote
widget — service, pick-up, destination, date, passengers/load. It books nothing;
it hands those five values to `/contact` as query parameters, and the enquiry
form composes them into a ready-written message. Nobody retypes what they have
already told us. See `src/components/home/JourneyPlanner.tsx` and
`composeJourneyMessage()` in `src/components/sections/ContactForm.tsx`.

**The coverage map.** `src/components/sections/NetworkMap.tsx` draws the road
corridors as an interactive SVG. City markers sit at their real latitude and
longitude, projected linearly onto the viewBox, so the diagram keeps Senegal's
true relative geography while remaining honestly labelled as a schematic. Edit
cities and corridors in `src/data/network.ts`.

## Contact form

The form posts JSON to `VITE_CONTACT_ENDPOINT` when it is set (Formspree,
Netlify Forms, Web3Forms, or your own function). With no endpoint configured it
falls back to opening the visitor's mail client with everything pre-filled, so
it is never a dead end. Copy `.env.example` to `.env` to wire it up.

## Deployment

`vercel.json` and `public/_redirects` both rewrite all paths to `index.html` for
client-side routing, so the site deploys to Vercel or Netlify as-is.

## Accessibility & performance notes

- Skip link, breadcrumb landmarks, labelled form fields with inline errors, and
  `aria-*` state on the menu, dropdowns, fleet filter, and language switcher.
- The second-language tagline is wrapped in its own `lang` attribute so screen
  readers pronounce it correctly.
- Every entrance animation is disabled under `prefers-reduced-motion`.
- Images below the fold are `loading="lazy"`; the hero is `fetchPriority="high"`.

---

Built by [Zafrika](https://zafrika.com).
