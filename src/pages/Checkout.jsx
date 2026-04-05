import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import { useAuth } from '../context/AuthContext'
import './Checkout.css'

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart()
  const { user } = useAuth()
  const navigate  = useNavigate()

  // Fix 5 — redirect to /shop if cart is empty
  useEffect(() => {
    if (cart.length === 0) navigate('/shop', { replace: true })
  }, [cart, navigate])

  const handleOrder = (e) => {
    e.preventDefault()
    clearCart()
    // Fix 8 — navigate to success page instead of alert
    navigate('/order-success')
  }

  if (cart.length === 0) return null // render nothing while redirecting

  return (
    <div className="page">
      <div className="container">
        <div className="checkout-header fade-up">
          <p className="section-label">Final Step</p>
          <h1 className="section-title">Checkout</h1>
          <p className="checkout-user">
            Logged in as <strong>{user?.name}</strong>
          </p>
        </div>

        <div className="checkout-layout">
          {/* Shipping + Payment Form */}
          <form className="checkout-form fade-up" onSubmit={handleOrder}>
            <h3>Shipping Details</h3>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label>Street Address</label>
              <input type="text" placeholder="123 Main Street" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" placeholder="New York" required />
              </div>
              <div className="form-group">
                <label>ZIP Code</label>
                <input type="text" placeholder="10001" required />
              </div>
            </div>

            <h3 style={{ marginTop: 28 }}>Payment Info</h3>

            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="4242 4242 4242 4242" maxLength={19} required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry</label>
                <input type="text" placeholder="MM / YY" maxLength={7} required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="123" maxLength={3} required />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: 20, fontSize: 16, padding: '16px' }}
            >
              Place Order — {formatPrice(cartTotal)}
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <div className="checkout-summary fade-up">
            <h3>Order ({cart.length} {cart.length === 1 ? 'item' : 'items'})</h3>

            <div className="checkout-items">
              {cart.map(item => (
                <div key={item.id} className="checkout-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div>
                    {/* Fix 4 — conditional ellipsis */}
                    <p>{item.title.length > 28 ? item.title.slice(0, 28) + '…' : item.title}</p>
                    <p className="checkout-item-meta">
                      ×{item.qty} · {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
