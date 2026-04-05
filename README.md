# ShopZone 🛍️

A full-featured multi-page E-Commerce SPA built with **React 18**, **React Router v6**, and **Context API** — Week 6 internship project.

## Live Demo
> Deploy to Vercel and paste your URL here.

---

## Features

### Level 1 — Navigation & Routing
- React Router v6 with `BrowserRouter`
- Routes: `/` · `/shop` · `/product/:id` · `/cart` · `/contact` · `/login` · `/checkout` · `/order-success`
- Dynamic routing — `useParams()` on Product page fetches by ID
- URL changes on every navigation (no full page reload)

### Level 2 — Global Cart State
- `CartContext` wraps entire app via `main.jsx`
- `addToCart` increments quantity if item already exists — no duplicates
- Navbar cart badge updates instantly on every add
- `/cart` page with quantity controls, item subtotal, order total
- Toast notification on every add-to-cart action

### Level 3 — Auth & Persistence
- **Persistent Cart** — `localStorage` sync survives page refresh
- **Persistent Auth** — login state survives page refresh
- **`/login`** — Login with name OR continue as Guest
- **Protected Route** — `/checkout` requires login; redirects to `/login` with `state.from` so user returns after authenticating
- **`/order-success`** — dedicated confirmation page after placing order (no `alert()`)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| React Router DOM v6 | Client-side routing |
| Context API | Global state (no Redux needed) |
| localStorage | Persistence across refreshes |
| DummyJSON API | Product data source |

---

## Folder Structure

```
shopzone/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with live cart badge
│   │   ├── ProductCard.jsx     # Reusable product grid card
│   │   └── ProtectedRoute.jsx  # Auth guard — redirects to /login
│   ├── context/
│   │   ├── CartContext.jsx     # Cart state + localStorage + toast
│   │   └── AuthContext.jsx     # Auth state + localStorage
│   ├── pages/
│   │   ├── Home.jsx            # Hero banner + categories
│   │   ├── Shop.jsx            # Product grid + search + sort
│   │   ├── Product.jsx         # Detail page via useParams()
│   │   ├── Cart.jsx            # Cart items + order summary
│   │   ├── Contact.jsx         # Static contact form
│   │   ├── Login.jsx           # Guest/named login
│   │   ├── Checkout.jsx        # Protected — shipping + payment
│   │   └── OrderSuccess.jsx    # Post-order confirmation
│   ├── App.jsx                 # All routes defined here
│   ├── main.jsx                # AuthProvider > CartProvider > App
│   └── index.css               # Design system + CSS variables
├── vercel.json                 # SPA routing fix for Vercel
├── Prompts.md                  # AI prompts log (submission req.)
└── package.json
```

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. The `vercel.json` already handles SPA routing — no extra config needed

> **FAQ #19 Tip:** `vercel.json` rewrites all routes to `index.html` so refreshing `/product/5` won't 404.

---

## API

All product data from [DummyJSON](https://dummyjson.com/products):

```
GET https://dummyjson.com/products?limit=100   → all products
GET https://dummyjson.com/products/:id         → single product
```

---

## Design

- **Font:** Playfair Display (headings) + DM Sans (body)
- **Theme:** Dark editorial — charcoal `#0f0f0f`, amber accent `#e8a045`
- **Motion:** CSS fade-up animations, hover transitions, cart badge pop
- **Responsive:** Mobile-first layout, cart controls stack on small screens
