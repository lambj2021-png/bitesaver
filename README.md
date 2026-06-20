# 🍔 BiteSaver

One app to find every food deal nearby and online — fast-food promos, coupon codes, gift card discounts, grocery flash sales, and limited-time offers. Compare any meal by **calories per dollar** to know you're getting the best bang for your bite.

## Features
- **🔥 Deal Feed** — Trending deals, flash sales, and limited-time offers
- **🍔 Fast Food** — Deals organized by chain (McDonald's, Burger King, Taco Bell, and more)
- **🛒 Groceries** — Weekly ads, flash sales, and bulk deals from major grocery chains
- **🏷️ Promo Codes** — Searchable list of active promo codes with one-tap copy
- **🎁 Gift Cards** — Compare discounted gift card prices from Raise, CardCash, GiftCardGranny
- **📊 Compare** — Interactive calories-per-dollar comparison tool
- **⭐ Premium** — Early access, smart alerts, ad-free experience ($2.99/mo)

## Tech Stack
- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is output to `dist/`.

## Project Structure
```
src/
├── components/     # Reusable UI components
│   ├── Layout.tsx  # App shell with bottom tab navigation
│   └── DealCard.tsx# Deal card component
├── data/           # Deal data (mock — real sourcing TBD)
│   ├── fastFoodDeals.ts
│   ├── groceryDeals.ts
│   ├── promoCodes.ts
│   ├── giftCards.ts
│   └── comparisons.ts
├── pages/          # Tab pages
│   ├── Home.tsx
│   ├── FastFood.tsx
│   ├── Groceries.tsx
│   ├── PromoCodes.tsx
│   ├── GiftCards.tsx
│   ├── Compare.tsx
│   └── Premium.tsx
├── App.tsx
├── main.tsx
└── index.css
```