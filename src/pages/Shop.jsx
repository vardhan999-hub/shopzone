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

    const url = categoryParam
      ? `https://dummyjson.com/products/category/${categoryParam}`
      : `https://dummyjson.com/products`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [categoryParam])

  // Only search filter
  let displayed = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

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
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-input"
          />

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
            <p>😕 Failed to load products</p>
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
            {displayed.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
