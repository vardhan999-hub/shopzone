import { Link } from 'react-router-dom'
import './OrderSuccess.css'

export default function OrderSuccess() {
  return (
    <div className="page success-page">
      <div className="success-card fade-up">
        <div className="success-icon">🎉</div>
        <p className="section-label">Thank you!</p>
        <h1 className="success-title">Order Placed!</h1>
        <p className="success-sub">
          Your order is confirmed and will ship in 3–5 business days.<br />
          A receipt has been sent to your email.
        </p>
        <div className="success-actions">
          <Link to="/shop" className="btn btn-primary">Continue Shopping →</Link>
          <Link to="/"     className="btn btn-outline">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
