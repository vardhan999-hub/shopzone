import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import './Shop.css'

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

    fetch('https://dummyjson.com/products?limit=200')
      .then(res => res.json())
      .then(data => {
        console.log("CATEGORIES:", [...new Set(data.products.map(p => p.category))])
        setProducts(data.products || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  let displayed = products

  if (categoryParam) {
    displayed = products.filter(p => {
      const cat = p.category.toLowerCase()

      if (categoryParam === 'smartphones') {
        return cat.includes('phone') || cat.includes('smart')
      }

      if (categoryParam === 'skincare') {
        return cat.includes('skin') || cat.includes('care')
      }

      return cat === categoryParam.toLowerCase()
    })
  }

  // Search
  displayed = displayed.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
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

        <div className="shop-header">
          <h1>The Shop</h1>
          {categoryParam && <p>Filtered: {categoryParam}</p>}
          <p>{loading ? '…' : `${displayed.length} products`}</p>
        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {loading ? (
          <div className="products-grid">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="products-grid">
            {displayed.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
