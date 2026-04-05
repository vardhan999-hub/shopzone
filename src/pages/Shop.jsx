import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import './Shop.css'

// Skeleton loader
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="sk-img" />
      <div className="sk-body">
        <div className="sk-line long" />
        <div className="sk-line short" />
        <div className="sk-line medium" />
      </div>
    </div>
  )
}

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')

  useEffect(() => {
    setLoading(true)

    fetch('https://dummyjson.com/products?limit=200') // fetch all
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  // ✅ FINAL FILTER (simple + correct)
  let displayed = products.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())

    const matchCat =
      !categoryParam ||
      p.category.toLowerCase() === categoryParam.toLowerCase()

    return matchSearch && matchCat
  })

  // Sorting
  if (sortBy === 'price-asc')
    displayed = [...displayed].sort((a, b) => a.price - b.price)

  if (sortBy === 'price-desc')
    displayed = [...displayed].sort((a, b) => b.price - a.price)

  if (sortBy === 'rating')
    displayed = [...displayed].sort((a, b) => b.rating - a.rating)

  return (
    <div className="page">
      <div className="container">

        {/* Header */}
        <div className="shop-header fade-up">
          <div>
            <p className="section-label">Catalogue</p>
            <h1 className="section-title">The Shop</h1>

            {categoryParam && (
              <p className="shop-filter-tag">
                Filtered: <strong>{categoryParam}</strong>
              </p>
            )}
          </div>

          <p className="shop-count">
            {loading ? '…' : `${displayed.length} products`}
          </p>
        </div>

        {/* Controls */}
        <div className="shop-controls fade-up">
          <div className="search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>

            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* UI States */}
        {error ? (
          <div className="shop-empty">
            <p>😕 Failed to load products.</p>
          </div>

        ) : loading ? (
          <div className="products-grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>

        ) : displayed.length === 0 ? (
          <div className="shop-empty">
            <p>😕 No products found</p>
          </div>

        ) : (
          <div className="products-grid">
            {displayed.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
