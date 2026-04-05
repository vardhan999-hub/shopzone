import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('sz_cart')) || [] }
    catch { return [] }
  })

  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem('sz_cart', JSON.stringify(cart))
  }, [cart])

  const toastTimer = useRef(null)

  const showToast = (msg) => {
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(msg)
    toastTimer.current = setTimeout(() => setToast(null), 2400)
  }

  // Toast outside setCart — side effects must not live inside state updaters
  const addToCart = useCallback((product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      return exists
        ? prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p)
        : [...prev, { ...product, qty: 1 }]
    })
    // ✅ Side effect is outside the updater function
    showToast(`Added "${product.title.slice(0, 22)}…"`)
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }, [])

  // Fix 3 — qty floor is 1
  const updateQty = useCallback((id, qty) => {
    if (qty < 1) return
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }}>
      {children}
      {toast && <div className="toast">🛒 {toast}</div>}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
