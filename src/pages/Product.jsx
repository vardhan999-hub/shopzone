import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './Product.css'

export default function Product() {
  const { id }        = useParams()
  const navigate      = useNavigate()
  const { addToCart } = useCart()

  const [product,   setProduct]   = useState(null)
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState(false)
  const [activeImg, setActiveImg] = useState(0)
  const [added,     setAdded]     = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(r => { if (!r.ok) throw new Error('Not found'); return r.json() })
      .then(data => { setProduct(data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [id])

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  // Improvement 3 — clear loading state UI
  if (loading) return (
    <div className="page">
      <div className="container">
        <div className="product-skeleton">
          <div className="skeleton-img" />
          <div className="skeleton-info">
            <div className="skeleton-line short" />
            <div className="skeleton-line long"  />
            <div className="skeleton-line medium"/>
            <div className="skeleton-line short" />
          </div>
        </div>
      </div>
    </div>
  )

  if (error || !product) return (
    <div className="page">
      <div className="container" style={{ textAlign: 'center', paddingTop: 80 }}>
        <p style={{ fontSize: 48, marginBottom: 16 }}>😕</p>
        <h2>Product not found</h2>
        <p style={{ color: 'var(--muted)', marginTop: 8 }}>
          This product doesn't exist or was removed.
        </p>
        <button className="btn btn-outline" style={{ marginTop: 24 }} onClick={() => navigate('/shop')}>
          ← Back to Shop
        </button>
      </div>
    </div>
  )

  const images   = product.images?.length ? product.images : [product.thumbnail]
  const stars    = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating))
  const discount = product.discountPercentage

  return (
    <div className="page">
      <div className="container">
        <button className="btn btn-ghost back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="product-layout fade-up">
          {/* Image gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src={images[activeImg]} alt={product.title} />
              {discount > 0 && (
                <span className="discount-badge">-{Math.round(discount)}%</span>
              )}
            </div>
            {images.length > 1 && (
              <div className="gallery-thumbs">
                {images.map((img, i) => (
                  <button
                    key={i}
                    className={`thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="product-info">
            <p className="section-label">{product.category}</p>
            <h1 className="product-title">{product.title}</h1>

            <div className="product-rating">
              <span className="stars">{stars}</span>
              <span className="rating-val">{product.rating} / 5</span>
              <span className="stock-status">· {product.stock} in stock</span>
            </div>

            <div className="product-price-row">
              {/* Improvement 2 — formatPrice utility */}
              <span className="product-price">{formatPrice(product.price)}</span>
              {discount > 0 && (
                <span className="original-price">
                  {formatPrice(product.price / (1 - discount / 100))}
                </span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              {product.brand && <div className="meta-row"><span>Brand</span><strong>{product.brand}</strong></div>}
              <div className="meta-row"><span>SKU</span><strong>{product.sku || `SZ-${product.id}`}</strong></div>
              <div className="meta-row"><span>Warranty</span><strong>{product.warrantyInformation || 'Standard warranty'}</strong></div>
              <div className="meta-row"><span>Shipping</span><strong>{product.shippingInformation || 'Ships in 3–5 days'}</strong></div>
            </div>

            <div className="product-actions">
              <button
                className={`btn btn-primary add-btn ${added ? 'added' : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Added to Cart!' : '+ Add to Cart'}
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/cart')}>
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
