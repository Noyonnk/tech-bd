"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Search, ShieldCheck, ShoppingBag, Zap } from "lucide-react";

type Product = { id: number; name: string; category: string; duration: string; price: number; description: string; icon: string; featured?: boolean };
const products: Product[] = [
  { id: 1, name: "Gemini AI Pro", category: "AI Tools", duration: "Subscription", price: 450, description: "AI tools for writing, research and productivity.", icon: "✦", featured: true },
  { id: 2, name: "ChatGPT", category: "AI Tools", duration: "Subscription", price: 500, description: "AI assistant access options, subject to eligibility.", icon: "◎", featured: true },
  { id: 3, name: "Canva Pro", category: "Design", duration: "Subscription", price: 180, description: "Design assets and creative workflow tools.", icon: "✿", featured: true },
  { id: 4, name: "CapCut Pro", category: "Video", duration: "Subscription", price: 220, description: "Video editing features for creators.", icon: "◈" },
  { id: 5, name: "Microsoft 365", category: "Productivity", duration: "License / plan", price: 350, description: "Productivity tools for eligible accounts.", icon: "▦" },
  { id: 6, name: "Figma", category: "Design", duration: "Plan varies", price: 250, description: "Collaborative interface design tools.", icon: "◉" },
  { id: 7, name: "Claude", category: "AI Tools", duration: "Plan varies", price: 300, description: "AI assistance options, depending on availability.", icon: "✳" },
  { id: 8, name: "Creative Tools Bundle", category: "Bundles", duration: "Bundle", price: 399, description: "A curated collection of digital productivity tools.", icon: "⚡" }
];
const categories = ["All", "AI Tools", "Design", "Video", "Productivity", "Bundles"];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && `${p.name} ${p.description}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const cartItems = products.filter(p => cart.includes(p.id));
  const total = cartItems.reduce((sum, p) => sum + p.price, 0);
  const addToCart = (id: number) => setCart(current => current.includes(id) ? current : [...current, id]);

  return (
    <main>
      <header className="container nav">
        <a href="#" className="brand">TECH <span>BD</span></a>
        <nav className="navlinks">
          <a href="#shop">Shop</a><a className="optional" href="#why">Why Tech BD</a>
          <button className="pill" onClick={() => setShowCart(!showCart)}><ShoppingBag size={15} style={{display:"inline",verticalAlign:"middle",marginRight:6}}/>Cart <span className="cart-count">({cart.length})</span></button>
        </nav>
      </header>

      <section className="container hero">
        <div>
          <div className="eyebrow"><Zap size={14}/> DIGITAL PRODUCTS, SIMPLIFIED</div>
          <h1>Your digital life.<br/><span>Upgraded.</span></h1>
          <p className="lead">Discover useful digital tools and subscriptions in one place. A simple, modern shopping experience built for Bangladesh.</p>
          <div className="hero-actions"><a className="primary" href="#shop">Explore products <ArrowUpRight size={16} style={{display:"inline",verticalAlign:"middle"}}/></a><a className="pill" href="#why">Why Tech BD?</a></div>
          <div className="notice">Demo storefront: prices and products are examples. Orders and payments are not live yet.</div>
        </div>
        <div className="hero-art" aria-label="Tech BD digital products artwork">
          <div className="float-tag tag1">✦ Smart tools</div><div className="orbit"><div className="chip">TECH<br/>BD</div></div><div className="float-tag tag2">Fast • Simple • Digital</div>
        </div>
      </section>

      <section className="container section" id="shop">
        <div className="section-head"><div><h2>Explore products</h2><p>Find tools for work, creativity and everyday tasks.</p></div><span className="cart-count">{filtered.length} items</span></div>
        <label style={{display:"block",position:"relative",maxWidth:440}}><Search size={18} style={{position:"absolute",left:14,top:14,color:"#9ca9a4"}}/><input className="search" style={{paddingLeft:42}} value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search digital products..." /></label>
        <div className="filters">{categories.map(c=><button key={c} className={`filter ${category===c?"active":""}`} onClick={()=>setCategory(c)}>{c}</button>)}</div>
        <div className="products">
          {filtered.map(p=><article className="product" key={p.id}>
            <div className="product-icon">{p.icon}</div><small>{p.category.toUpperCase()}</small><h3>{p.name}</h3><p>{p.description}</p>
            <div className="product-bottom"><div className="price">৳{p.price}<br/><span>{p.duration}</span></div><button className="buy" onClick={()=>addToCart(p.id)}>{cart.includes(p.id)?"Added ✓":"Add to cart"}</button></div>
          </article>)}
        </div>
        {filtered.length===0 && <p style={{color:"var(--muted)",padding:"30px 0"}}>No products found. Try another search.</p>}
        {showCart && <div className="trust" style={{marginTop:28}}><div className="trust-item" style={{gridColumn:"1 / -1"}}><b>Your cart ({cart.length})</b>{cartItems.length===0?<span>Your cart is empty. Add a product to get started.</span>:<><span>{cartItems.map(p=>`${p.name} — ৳${p.price}`).join(" · ")}</span><p><b>Total: ৳{total}</b></p><button className="primary" onClick={()=>alert("Demo only: checkout and payment have not been connected yet.")}>Continue to demo checkout</button><button className="filter" style={{marginLeft:10}} onClick={()=>setCart([])}>Clear cart</button></>}</div></div>}
      </section>

      <section className="container section" id="why">
        <div className="section-head"><div><h2>Why Tech BD?</h2><p>A straightforward place to explore digital tools.</p></div></div>
        <div className="trust">
          <div className="trust-item"><ShieldCheck color="var(--green)" size={22}/><b>Clear information</b><span>Product details and example pricing displayed clearly.</span></div>
          <div className="trust-item"><Zap color="var(--green)" size={22}/><b>Simple experience</b><span>Search, filter and add products to your cart.</span></div>
          <div className="trust-item"><Check color="var(--green)" size={22}/><b>Built to grow</b><span>Payment and order features can be integrated later.</span></div>
        </div>
      </section>

      <footer className="container footer"><a href="#" className="brand">TECH <span>BD</span></a><span>© {new Date().getFullYear()} Tech BD. Demo storefront.</span><span>Contact · FAQ · Policies</span></footer>
    </main>
  );
}
