# Prompts.md — ShopZone AI Prompts Log

This file documents the AI prompts used during the development of ShopZone as part of the internship submission requirements.

---

## Prompt 1 — Project Scaffold

**Prompt:**
> Build a full multi-page e-commerce SPA called ShopZone using React, React Router v6, and Context API. Use the DummyJSON API (https://dummyjson.com/products). Structure: src/components, src/pages, src/context. Include routes for /, /shop, /product/:id, /cart, /contact, /login, /checkout.

**Used for:** Initial project structure, App.jsx routing setup, folder layout.

---

## Prompt 2 — Context API (Cart)

**Prompt:**
> Create a CartContext.jsx with CartProvider. Implement: addToCart (increments qty if item exists, else adds new), removeFromCart, updateQty (min 1), clearCart, cartCount, cartTotal. Persist cart to localStorage. Show a toast notification when items are added.

**Used for:** `src/context/CartContext.jsx`

---

## Prompt 3 — Auth Context (Separated)

**Prompt:**
> Create a separate AuthContext.jsx with AuthProvider. Include: login(name) sets user state and persists to localStorage, logout() clears it, isLoggedIn boolean derived from user state. Export useAuth hook.

**Used for:** `src/context/AuthContext.jsx`

---

## Prompt 4 — Protected Route

**Prompt:**
> Create a ProtectedRoute component using React Router v6. If user is not logged in (from useAuth), redirect to /login and pass the current location.pathname as state.from so the login page can redirect back after authentication.

**Used for:** `src/components/ProtectedRoute.jsx`

---

## Prompt 5 — Shop Page with Filters

**Prompt:**
> Create a Shop page that fetches all products from https://dummyjson.com/products?limit=100. Add a search bar that filters by title or category. Add a sort dropdown (default, price low-high, price high-low, top rated). Show a loading spinner while fetching. Display results in a responsive CSS grid using ProductCard components.

**Used for:** `src/pages/Shop.jsx`

---

## Prompt 6 — Product Detail Page

**Prompt:**
> Create a Product detail page using useParams() to get the product ID from the URL. Fetch from https://dummyjson.com/products/:id. Display: image gallery with thumbnails, title, rating stars, price with discount badge, description, metadata (brand, SKU, warranty, shipping). Add an "Add to Cart" button that temporarily shows a success state.

**Used for:** `src/pages/Product.jsx`

---

## Prompt 7 — Cart Page

**Prompt:**
> Create a Cart page. Show all cart items with image, title, category, price per unit, quantity controls (min 1, disabled at 1), item subtotal, and remove button. Show an Order Summary sidebar with per-item breakdown and total. Add a "Proceed to Checkout" button. On mobile, stack the quantity controls below the item info instead of hiding them.

**Used for:** `src/pages/Cart.jsx`

---

## Prompt 8 — Login Page with Redirect

**Prompt:**
> Create a Login page with two options: enter a name and click Login, or click "Continue as Guest". After login, redirect to location.state.from (the page the user was trying to access) or / if none. Show a warning message if redirected from a protected route.

**Used for:** `src/pages/Login.jsx`

---

## Prompt 9 — Checkout (Protected) + Order Success

**Prompt:**
> Create a protected Checkout page. Redirect to /shop if cart is empty (using useEffect). Show a shipping form and payment form with a sticky order summary sidebar. On submit, clear the cart and navigate to /order-success. Create the OrderSuccess page with a confirmation message and animated icon.

**Used for:** `src/pages/Checkout.jsx`, `src/pages/OrderSuccess.jsx`

---

## Prompt 10 — Global Design System

**Prompt:**
> Create a cohesive dark editorial design system using CSS custom properties. Use Playfair Display for headings and DM Sans for body text. Color palette: deep charcoal background (#0f0f0f), warm amber accent (#e8a045), muted warm gray for secondary text. Include utility classes for buttons, fade-up animations, spinner, toast notifications, and a sticky navbar with cart badge.

**Used for:** `src/index.css`, all component CSS files.
