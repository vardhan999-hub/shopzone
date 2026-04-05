import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product, style }) {
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating))

  return (
    <Link to={`/product/${product.id}`} className="product-card fade-up" style={style}>
      <div className="card-img-wrap">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <span className="card-category">{product.category}</span>
      </div>
      <div className="card-body">
        <p className="card-title">{product.title}</p>
        <div className="card-meta">
          <span className="card-rating">{stars}</span>
          <span className="card-price">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}
