# Tech BD — multi-page storefront starter

This version keeps the existing dark + neon green Tech BD storefront style and adds working navigation between Home, Shop, Product Details, Cart, Checkout and Login preview pages.

## Run / deploy
- Import the repository into Vercel with the default Next.js settings.
- Run `npm install`, then `npm run build` to verify.

## Edit product posts and images
- Edit `lib/products.ts` to change product name, price, category, duration and description.
- Upload each product image into `public/products/` (example: `public/products/canva-pro.jpg`).
- In that product entry set `image: '/products/canva-pro.jpg'`.
- If no image path is provided, the card displays its icon instead.

## Important limitations
- Cart is stored in the visitor's browser (localStorage); it is not a server-side order database.
- Checkout prepares an order request locally and can copy its details, but does not submit orders to a business or collect payments.
- Login is a UI preview, not real authentication.
- Add a secure backend, authentication provider, order database and approved payment provider before accepting real orders.
- Only list digital subscriptions/licenses you are authorized to resell.
