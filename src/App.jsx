import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar           from './components/Navbar.jsx'
import ProtectedRoute   from './components/ProtectedRoute.jsx'

import Home             from './pages/Home.jsx'
import Shop             from './pages/Shop.jsx'
import Product          from './pages/Product.jsx'
import Cart             from './pages/Cart.jsx'
import Contact          from './pages/Contact.jsx'
import Login            from './pages/Login.jsx'
import Checkout         from './pages/Checkout.jsx'
import OrderSuccess     from './pages/OrderSuccess.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/shop"        element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart"        element={<Cart />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/login"       element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
