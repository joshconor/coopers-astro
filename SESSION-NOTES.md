# Coopers Astro — Session Handoff

> Read this first. Master content brief is at `/Users/fordipstech/python automation/coopers-brief.md`. Project-wide playbook is `/Users/fordipstech/python automation/CLAUDE.md`.

## State of the build (as of last session)

**Status**: Live, deployed, mid-polish.

**Live URL**: https://coopers-astro.jconor624.workers.dev (Cloudflare Pages, auto-deploys on push to `main`)

**Repo**: https://github.com/joshconor/coopers-astro

**Local dev**: `cd "/Users/fordipstech/python automation/coopers-astro" && npm run dev` → http://localhost:4321

## Stack

- Astro 6 (static)
- Tailwind 4 (`@import "tailwindcss"` in `src/styles/global.css`)
- Inter + Playfair Display (Google Fonts)
- Formspree form ID: `xzdozezg` (delivers to Josh's account)
- Brand tokens: `--color-pasture #355E3B` (deep forest green), `--color-gold #C9A24B`, surface cream `#F5F2EC`

## What's built (single-page scroll)

| Section | File | Notes |
|---|---|---|
| Header | `src/components/Header.astro` | Logo, nav, click-to-call phone, Order Now button |
| Hero | `src/components/Hero.astro` | **Full-bleed cattle pasture photo across page** + headline + CTAs + trust stats (100% / 30+ / 50). Hero photo: `src/assets/hero/cattle-pasture.jpg` |
| Trust row | `src/components/TrustRow.astro` | 3 icon blocks: grass-fed, family-owned, shipped nationwide |
| Shop | `src/components/Shop.astro` | 6-product grid, square `object-cover` images. Pulls from `src/data/products.ts` |
| Story | `src/components/Story.astro` | Full 230-word story + Playfair Display pull-quote. **Background photo of grazing cattle** at `src/assets/farm/cattle-grazing.jpg` with cream gradient overlay (`from-white/75 via-white/70 to-white/80`) |
| Testimonials | `src/components/Testimonials.astro` | 4 placeholder review cards |
| FAQ | `src/components/FAQ.astro` | 10 accordion items, content from `src/data/faq.ts` |
| Order Form | `src/components/OrderForm.astro` | Formspree ID `xzdozezg`, all fields per brief §10.2 |
| Footer | `src/components/Footer.astro` | Placeholder NAP — `City, State` + `(555) 123-4567` + `jconor624@gmail.com` |

## Products (`src/data/products.ts`)

All 6 products live with prices:
- Full Beef $3,500 (uses `assets/full-beef.png`)
- 1/2 Beef $2,200 (uses `assets/half-beef.png`)
- 1/4 Beef $1,000 (uses `assets/quarter-beef.png`)
- 1/8 Beef $500 (uses `assets/eighth-beef.png`)
- Full Pig $1,500 (uses `assets/products/pig-cuts.jpg`)
- 1/2 Pig $800 (uses `assets/products/pig-cuts.jpg` — same diagram for both)

## Photo workflow

1. Josh drops photo into `/Users/fordipstech/Desktop/incoming/` (he created this folder by mistake — keep using it; it works)
2. He tells Claude in chat: filename + where it goes + alt text
3. Claude moves it to the right `src/assets/` subfolder, wires it in, commits, pushes
4. Cloudflare auto-redeploys in ~30s

Asset folders:
- `src/assets/hero/` — hero banner photos
- `src/assets/products/` — product card photos
- `src/assets/farm/` — story / lifestyle / about photos
- `src/assets/incoming/` — exists but Josh has been using `~/Desktop/incoming/`

## Open TODOs (priority order)

1. **Real phone number** — placeholder `(555) 123-4567` in `Header.astro`, `Footer.astro`, sticky mobile button, and Hero/Layout meta. Replace globally.
2. **City + State** — placeholder "City, State" in `Footer.astro`. Brief calls for city + state only, no street.
3. **Real Coopers logo** — current `src/assets/logo.jpg` is the clone source's "LOCAL GRASS CATTLE BEEF" logo. When Josh provides the real one, replace the file at the same path. Convert to transparent PNG/SVG.
4. **Real customer testimonials** — `Testimonials.astro` has 4 placeholders. Swap when Josh has Google Reviews (or before).
5. **Email change** — Josh asked about putting "the client's" email on the site instead of `jconor624@gmail.com` (footer + form delivery). Open question — needs Josh to confirm:
   - Whose email should display in footer?
   - Form delivery: keep going to Josh, switch to client only, or send to both? Both requires Formspree paid plan ($10/mo) OR client creates their own free Formspree.
6. **Favicon** — still default Astro favicon at `public/favicon.svg`.
7. **Social links** — footer has no icons; brief says "hidden until URLs supplied."
8. **(Optional) Beef carcass photo** — Josh sent a hanging dry-aging carcass photo, decided not to use it as story background. Could be revisited as inline image in story narrative or future "Our Process" page.

## Convention notes for future Claude

- Commit message style: short imperative, no scope prefixes (e.g., `Add cattle pasture background photo to story section`, `Restructure hero: full-bleed cattle photo banner across page`).
- Author name + email used: `Josh Conor <jconor624@gmail.com>`.
- Tailwind v4 syntax: brand colors are CSS vars in `@theme` block, used as `bg-pasture`, `text-gold`, etc.
- Apple-style scroll reveals: add `class="reveal"` to any element. The IntersectionObserver in `Layout.astro` handles fade-in.
- Josh is a beginner — define jargon, give click paths, don't suggest Next.js/React (his project CLAUDE.md forbids it).
- Compare-build-in-progress: there's a parallel WordPress build at `/Users/fordipstech/Local Sites/coopers-grass-fed-cattle-beef-sales/` — don't touch it. Astro is the active path.

## Deploy / push details

- Cloudflare Pages auto-builds on every push to `main` (Astro preset, build cmd `npm run build`, output `dist`).
- GitHub auth lives in macOS Keychain — `git push` just works from this machine.
- ~30 second turnaround from `git push` to live URL update.

## Quick recovery commands

- Revert last commit: `git revert HEAD`
- See what changed last: `git log --oneline -10`
- Start dev server: `npm run dev`
- Build for prod check: `npm run build && npm run preview`
