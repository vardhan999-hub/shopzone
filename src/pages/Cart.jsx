import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './Cart.css'

export default function Cart() {
  const { cart, removeFromCart, updateQty, clearCart, cartTotal } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) return (
    <div className="page">
      <div className="container cart-empty">
        <div className="empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        {/* Fix 7 — show total items count */}
        <p>Total Items: 0</p>
        <p style={{ marginTop: 8 }}>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: 28 }}>
          Start Shopping →
        </Link>
      </div>
    </div>
  )

  return (
    <div className="page">
      <div className="container">
        <div className="cart-header fade-up">
          <div>
            <p className="section-label">Review</p>
            <h1 className="section-title">Your Cart</h1>
            {/* Fix 7 — total items count */}
            <p className="cart-item-count">
              Total Items: <strong>{cart.reduce((s, i) => s + i.qty, 0)}</strong>
            </p>
          </div>
          <button className="btn btn-ghost" onClick={clearCart}>Clear All</button>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item, i) => (
              <div key={item.id} className="cart-item fade-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="cart-item-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>

                <div className="cart-item-info">
                  {/* Fix 4 — title slice only adds … if actually truncated */}
                  <p className="cart-item-title">
                    {item.title.length > 40 ? item.title.slice(0, 40) + '…' : item.title}
                  </p>
                  <p className="cart-item-cat">{item.category}</p>
                  <p className="cart-item-price">{formatPrice(item.price)} each</p>
                </div>

                {/* Fix 3+9 — qty controls always visible, min qty is 1 */}
                <div className="cart-item-controls">
                  <div className="cart-item-qty">
                    <button
                      onClick={() => item.qty > 1 && updateQty(item.id, item.qty - 1)}
                      disabled={item.qty <= 1}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-subtotal">
                    {formatPrice(item.price * item.qty)}
                  </div>

                  <button className="cart-remove" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary fade-up">
            <h3>Order Summary</h3>
            <div className="summary-rows">
              {cart.map(item => (
                <div key={item.id} className="summary-row">
                  {/* Fix 4 — conditional ellipsis */}
                  <span>
                    {item.title.length > 22 ? item.title.slice(0, 22) + '…' : item.title}
                    {' '}×{item.qty}
                  </span>
                  <span>{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout →
            </button>
            <Link to="/shop" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
