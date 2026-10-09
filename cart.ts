export type CartLine = { productId: number; quantity: number };
export const CART_KEY = 'tech-bd-cart-v1';
export function readCart(): CartLine[] {
  if (typeof window === 'undefined') return [];
  try { const value = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; }
}
export function writeCart(cart: CartLine[]) { if (typeof window !== 'undefined') localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
export function addCartItem(id: number) { const cart = readCart(); const found = cart.find(x => x.productId === id); if (found) found.quantity += 1; else cart.push({ productId: id, quantity: 1 }); writeCart(cart); }
export function cartCount() { return readCart().reduce((n, x) => n + x.quantity, 0); }
