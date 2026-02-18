# Appscrip Task — Dashrath Bogati

A **Product Listing Page (PLP)** built with **Next.js 16**, **React 19**, and **vanilla CSS**. The project fetches products from the [Fake Store API](https://fakestoreapi.com/) and renders them in a responsive, accessible layout with sidebar filters, sorting controls, and a wishlist toggle.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [API Reference](#api-reference)
- [Component Overview](#component-overview)
- [Styling Approach](#styling-approach)
- [Performance & SEO](#performance--seo)
- [Screenshots](#screenshots)

---

## Tech Stack

| Layer        | Technology                         |
| ------------ | ---------------------------------- |
| Framework    | Next.js 16.1.6 (App Router)       |
| UI Library   | React 19.2.3                       |
| Language     | JavaScript (ES Modules)            |
| Styling      | Vanilla CSS (BEM methodology)      |
| Font         | Geist & Geist Mono (Google Fonts)  |
| Image Opt.   | `next/image` with remote patterns  |
| React Compiler | Enabled via `babel-plugin-react-compiler` |
| Linting      | ESLint 9 + eslint-config-next      |
| Data Source   | Fake Store API                     |

---

## Features

- **Server-Side Data Fetching** — Products are fetched on the server using `async` Server Components with ISR (`revalidate: 60`).
- **Responsive Layout** — Fully responsive design for mobile, tablet, and desktop viewports.
- **Sidebar Filters** — Collapsible accordion-style filter panel with categories: Ideal For, Occasion, Work, Fabric, Segment, Suitable For, Raw Materials, Pattern, and a Customizable checkbox.
- **Sort Dropdown** — Sort products by Recommended, Newest First, Popular, Price High to Low, Price Low to High.
- **Show/Hide Filters** — Toggle filter sidebar visibility from the toolbar.
- **Wishlist Toggle** — Heart icon on each product card with animated fill state.
- **Product Badges** — "NEW PRODUCT" and "OUT OF STOCK" badges on selected cards.
- **Error Boundary** — Class-based React Error Boundary wrapping the product listing section for graceful error handling.
- **Newsletter Subscription** — Email signup form in the footer.
- **Accessible Navigation** — ARIA roles, labels, and keyboard-friendly interactive elements throughout.
- **Optimized Images** — `next/image` with responsive `sizes` attribute and priority loading for above-the-fold assets.
- **Mobile Hamburger Menu** — Collapsible navigation menu for smaller screens.

---

## Project Structure

```
Appscrip-task-dashrath-bogati/
├── README.md
└── client/
    ├── next.config.mjs          # Next.js config (React Compiler, image domains)
    ├── package.json
    ├── public/
    │   ├── images/
    │   │   ├── icons/            # SVG icons (search, cart, wishlist, etc.)
    │   │   ├── logo/             # Brand logos
    │   │   └── payments/         # Payment method icons (GPay, Mastercard, etc.)
    │   ├── Phone/                # Mobile reference screenshots
    │   └── Web/
    │       └── PLP/              # Desktop reference screenshots & logo
    └── src/
        ├── app/
        │   ├── globals.css       # Global reset & base styles
        │   ├── layout.js         # Root layout (fonts, metadata)
        │   ├── page.js           # Home page (Server Component)
        │   └── page.module.css
        ├── components/
        │   ├── ErrorBoundary.js  # React error boundary
        │   ├── layout/
        │   │   ├── Navbar.js     # Top navigation bar
        │   │   └── Footer.js     # Site footer with links & newsletter
        │   └── plp/
        │       ├── Hero.js       # Hero banner section
        │       ├── PlpSection.js # PLP wrapper (toolbar + sidebar + grid)
        │       ├── ProductCard.js# Individual product card
        │       ├── ProductGrid.js# Product grid layout
        │       ├── SidebarFilters.js # Filter accordion sidebar
        │       └── Toolbar.js    # Item count, filter toggle, sort dropdown
        ├── lib/
        │   └── api.js            # Fake Store API fetch utility
        └── styles/
            ├── filters.css       # Sidebar filter styles
            ├── footer.css        # Footer styles
            ├── hero.css          # Hero section styles
            ├── navbar.css        # Navbar styles
            ├── plp-section.css   # PLP layout styles
            ├── product-card.css  # Product card styles
            ├── product-grid.css  # Product grid styles
            └── toolbar.css       # Toolbar styles
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/codexgetit/Appscrip-task-dashrath-bogati.git
cd Appscrip-task-dashrath-bogati/client

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start development server            |
| `npm run build` | Create optimized production build    |
| `npm start`     | Start production server              |
| `npm run lint`  | Run ESLint                           |

---

## API Reference

| Endpoint                              | Method | Description              |
| ------------------------------------- | ------ | ------------------------ |
| `https://fakestoreapi.com/products`   | GET    | Fetch all products       |

- **Caching**: ISR with `revalidate: 60` (re-fetches every 60 seconds).
- **Error Handling**: Returns an empty array on failure; logs errors to console.

---

## Component Overview

### Layout Components

| Component      | Type          | Description                                                                 |
| -------------- | ------------- | --------------------------------------------------------------------------- |
| `Navbar`       | Client        | Top bar with logo, hamburger menu, search/wishlist/cart/profile icons, language selector, and navigation links. |
| `Footer`       | Client        | Newsletter form, contact info, currency selector, mettā muse links, quick links, social icons, and payment method badges. |

### PLP Components

| Component        | Type          | Description                                                               |
| ---------------- | ------------- | ------------------------------------------------------------------------- |
| `Hero`           | Server        | Hero banner with title and description.                                   |
| `PlpSection`     | Client        | Orchestrates Toolbar, SidebarFilters, and ProductGrid; manages filter visibility state. |
| `Toolbar`        | Client        | Displays item count, filter show/hide toggle, and sort dropdown with 5 options. |
| `SidebarFilters` | Client        | Accordion-based filter panel with 8 categories and a customizable checkbox. |
| `ProductGrid`    | Server        | Renders a CSS grid of `ProductCard` components with badge logic.           |
| `ProductCard`    | Client        | Displays product image, title, sign-in prompt for pricing, and wishlist heart button. |
| `ErrorBoundary`  | Client (Class)| Catches rendering errors and shows a fallback UI.                          |

---

## Styling Approach

- **Methodology**: BEM (Block Element Modifier) naming convention.
- **Scope**: Each component has its own dedicated CSS file in `src/styles/`.
- **Reset**: Global CSS reset applied in `globals.css` (box-sizing, margin/padding reset, font smoothing).
- **Responsiveness**: Media queries within individual CSS files for mobile-first adaptations.
- **No CSS-in-JS or preprocessors** — pure vanilla CSS for simplicity and zero runtime cost.

---

## Performance & SEO

- **Server Components**: The page and hero are rendered on the server for fast initial paint and SEO.
- **React Compiler**: Enabled in `next.config.mjs` for automatic memoization.
- **`next/image`**: Automatic WebP/AVIF conversion, lazy loading, and responsive `sizes`.
- **Font Optimization**: Google Fonts loaded via `next/font` with CSS variable injection (no layout shift).
- **Metadata**: `<title>` and `<meta description>` set via Next.js `metadata` export for SEO.
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, and ARIA attributes.
- **ISR Caching**: Product data revalidated every 60 seconds, reducing API load.

---

## Screenshots

Reference designs are available in the `public/` folder:

- **Desktop**: `public/Web/PLP/`
- **Mobile**: `public/Phone/`