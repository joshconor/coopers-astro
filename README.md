# Coopers Grass Fed Beef

Single-page marketing site for Coopers Grass Fed Beef — a family-owned, 100% grass-fed beef and pasture-raised pork operation shipping nationwide since 1996.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Run locally

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build for production

```sh
npm run build
npm run preview
```

## Stack

- Astro 6 (static site generator)
- Tailwind CSS 4
- Inter + Playfair Display (Google Fonts)
- Formspree (order inquiry form)

## Project structure

```
src/
  assets/        product photos, logo, hero images
  components/    Hero, Shop, Story, FAQ, OrderForm, etc.
  data/          products + FAQ content
  layouts/       page shell
  pages/         routes (index.astro = home)
  styles/        global.css with brand tokens
```
