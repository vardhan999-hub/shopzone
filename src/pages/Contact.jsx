import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => navigate('/'), 3000)
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="container contact-success fade-up">
          <div className="contact-success-icon">✉️</div>
          <p className="section-label">Message Sent</p>
          <h2 className="section-title">Thanks for reaching out!</h2>
          <p>We'll get back to you within 24 hours. Redirecting you home…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="container contact-wrap">

        {/* Left — info */}
        <div className="contact-info fade-up">
          <p className="section-label">Reach Out</p>
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-sub">
            Have a question, feedback, or just want to say hi? We'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-row">
              <span className="contact-icon">📧</span>
              <div>
                <p className="contact-detail-label">Email</p>
                <p>support@shopzone.dev</p>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-detail-label">Phone</p>
                <p>+1 (800) SHOPZONE</p>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">🕐</span>
              <div>
                <p className="contact-detail-label">Hours</p>
                <p>Monday – Friday, 9 AM – 6 PM</p>
              </div>
            </div>
            <div className="contact-row">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-detail-label">Address</p>
                <p>123 Commerce St, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="you@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="What's this about?" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell us more…"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
          >
            Send Message →
          </button>
        </form>

      </div>
    </div>
  )
}
