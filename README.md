# Varna — Modern Everyday Essentials E-Commerce Storefront

A high-performance, pixel-faithful e-commerce storefront for **Varna**, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the storefront in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📸 Image Management System

All placeholders matching the design are pre-loaded in `public/images/`. Whenever you are ready to provide your own original images, follow the steps below.

### Where to Drop Your Images

Place your raw photos in the `raw-images/` directory under their corresponding subfolder:

| Folder | What to Put There | Recommended Dimensions | Expected Filenames |
|---|---|---|---|
| [`raw-images/01-hero/`](./raw-images/01-hero/) | Main couple hero banner & right floating polaroid photos | ~1920x1080 (Hero), ~400x400 (Polaroids) | `hero-main.<ext>`, `polaroid-top.<ext>`, `polaroid-bottom.<ext>` |
| [`raw-images/02-categories/`](./raw-images/02-categories/) | 7 Category photos / cutouts | ~600x750 (4:5 portrait) | `01-mens-tshirts.<ext>`, `02-mens-shirts.<ext>`, `03-jeans.<ext>`, `04-hoodies-sweatshirts.<ext>`, `05-womens-tops.<ext>`, `06-womens-dresses.<ext>`, `07-coord-sets.<ext>` |
| [`raw-images/03-new-arrivals/`](./raw-images/03-new-arrivals/) | 6 Product cards for New Arrivals | ~800x1000 (4:5 portrait) | `01-solid-linen-shirt.<ext>`, `02-ribbed-crop-top.<ext>`, `03-oversized-jersey-tee.<ext>`, `04-aline-dress.<ext>`, `05-relaxed-fit-jeans.<ext>`, `06-coord-set.<ext>` |
| [`raw-images/04-promo-banners/`](./raw-images/04-promo-banners/) | Men & Women split promo banners | ~1200x900 (4:3) | `men-banner.<ext>`, `women-banner.<ext>` |
| [`raw-images/05-varna-looks/`](./raw-images/05-varna-looks/) | 8 UGC Community looks with Instagram tags | ~600x800 (3:4 portrait) | `look-01.<ext>` through `look-08.<ext>` |
| [`raw-images/06-newsletter/`](./raw-images/06-newsletter/) | Tilted sneaker & polaroid quote cards | ~600x600 (Sneakers), ~600x700 (Polaroid) | `shoes-sneakers.<ext>`, `polaroid-quote.<ext>` |

> **Format Support**: You can drop images in **any format** (`.jpg`, `.png`, `.webp`, `.avif`, `.heic`, `.bmp`, `.tiff`, etc.).

### Automatic Image Optimization & Conversion

After dropping or replacing images in `raw-images/`, run:
```bash
npm run convert-images
```
or:
```bash
python scripts/convert-images.py
```
This script will automatically:
1. Scan all subfolders in `raw-images/`.
2. Resize & optimize each image preserving optimal aspect ratio and quality.
3. Convert to lightweight modern **WebP** files and output directly into `public/images/`.

---

## 🧩 Component Architecture

- [`components/AnnouncementBar.tsx`](./components/AnnouncementBar.tsx) — Top black bar with shipping, return & COD highlights + utility links.
- [`components/Header.tsx`](./components/Header.tsx) — Sticky navigation bar with search bar, account, wishlist counter, and cart drawer trigger.
- [`components/Hero.tsx`](./components/Hero.tsx) — Hero banner with editorial typography, "Same You Bolder Fits" headline, crown & heart doodles, and floating polaroids.
- [`components/TrendingTicker.tsx`](./components/TrendingTicker.tsx) — Seamless marquee ticker bar with sparkles.
- [`components/CategoryGrid.tsx`](./components/CategoryGrid.tsx) — 7 organic brush-cutout category cards with hand-drawn accents.
- [`components/NewArrivals.tsx`](./components/NewArrivals.tsx) — Filterable carousel with interactive wishlist toggle, color swatches, discounts, and ratings.
- [`components/DualPromoBanners.tsx`](./components/DualPromoBanners.tsx) — Split promotional cards for Men ("Built for Everyday") and Women ("Fits That Feel Like You").
- [`components/TrustBadges.tsx`](./components/TrustBadges.tsx) — "Why Shop Varna?" trust badges (Quality, Returns, Secure Payments, Community).
- [`components/VarnaLooks.tsx`](./components/VarnaLooks.tsx) — Community Instagram UGC photo gallery with gradient badges.
- [`components/Newsletter.tsx`](./components/Newsletter.tsx) — Dark club subscription box with paper airplane doodle and floating cards.
- [`components/Footer.tsx`](./components/Footer.tsx) — Comprehensive brand footer with navigation, social links, and payment badges.
- [`components/CartDrawer.tsx`](./components/CartDrawer.tsx) — Interactive sliding cart drawer with free shipping calculation.
- [`components/WishlistDrawer.tsx`](./components/WishlistDrawer.tsx) — Interactive wishlist drawer with "Move to Bag" actions.
- [`components/Doodles.tsx`](./components/Doodles.tsx) — Hand-crafted SVGs (crown, hearts, smiles, brush underlines, paper planes, sparkle stars).
