import { Link } from 'react-router-dom'
import './Home.css'

const categories = [
  { name: 'Smartphones',  emoji: '📱', q: 'smartphones' },
  { name: 'Laptops',      emoji: '💻', q: 'laptops' },
  { name: 'Fragrances',   emoji: '🌸', q: 'fragrances' },
  { name: 'Skincare',     emoji: '✨', q: 'skincare' },
  { name: 'Home Decor',   emoji: '🏠', q: 'home-decoration' },
  { name: 'Watches',      emoji: '⌚', q: 'mens-watches' },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="fade-up">
            <p className="section-label">New Season — 2025</p>
            <h1 className="hero-title">
              Shop<br />
              <span className="hero-accent">Without</span><br />
              Limits.
            </h1>
            <p className="hero-sub">
              Thousands of products. Instant delivery.<br />No page reloads.
            </p>
            <div className="hero-cta">
              <Link to="/shop" className="btn btn-primary">
                Browse Store →
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hero-visual fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="hero-card">
              <span className="hero-card-icon">🛍️</span>
              <p className="hero-card-title">100k+ Products</p>
              <p className="hero-card-sub">Across every category</p>
            </div>
            <div className="hero-card" style={{ animationDelay: '0.25s' }}>
              <span className="hero-card-icon">⚡</span>
              <p className="hero-card-title">Instant Cart</p>
              <p className="hero-card-sub">Zero page refreshes</p>
            </div>
            <div className="hero-card" style={{ animationDelay: '0.35s' }}>
              <span className="hero-card-icon">🔒</span>
              <p className="hero-card-title">Secure Checkout</p>
              <p className="hero-card-sub">Protected routes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <p className="section-label">Browse By</p>
          <h2 className="section-title" style={{ marginBottom: '36px' }}>Categories</h2>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <Link
                key={cat.q}
                to={`/shop?category=${cat.q}`}
                className="cat-card fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <span className="cat-emoji">{cat.emoji}</span>
                <span className="cat-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner fade-up">
            <h2 className="section-title">Ready to Shop?</h2>
            <p style={{ color: 'var(--muted)', marginTop: 12, marginBottom: 28 }}>
              Explore our full catalogue of premium products.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Go to Shop →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
