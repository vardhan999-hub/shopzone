import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar           from './components/Navbar'
import ProtectedRoute   from './components/ProtectedRoute'

import Home         from './pages/Home'
import Shop         from './pages/Shop'
import Product      from './pages/Product'
import Cart         from './pages/Cart'
import Contact      from './pages/Contact'
import Login        from './pages/Login'
import Checkout     from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'

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

        {/* Improvement 4 — both checkout and success are protected */}
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
