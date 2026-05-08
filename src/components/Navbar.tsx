# Corrected `Navbar.tsx`

```tsx
import {
  Search,
  Heart,
  ShoppingCart,
  User as UserIcon,
  ArrowLeft
} from "lucide-react";

import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import { useShop } from "../context/ShopContext";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PRODUCTS } from "../data";

export default function Navbar() {
  const { cart, wishlist, user, openAuth } = useShop();

  const navigate = useNavigate();
  const location = useLocation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase()) ||
    product.subcategory.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 6);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-[100]
        bg-black/30
        backdrop-blur-2xl
        border-b
        border-white/10
        px-6
        py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="
                w-10 h-10 rounded-full
                border border-white/10
                bg-white/5
                flex items-center justify-center
                text-white
                hover:bg-yellow-400
                hover:text-black
                transition-all
              "
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <Link
            to="/"
            className="
              text-2xl md:text-3xl
              font-accent
              gold-gradient-text
              tracking-tighter
              shrink-0
            "
          >
            Recreate873
          </Link>

        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl relative">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search outfits, collections..."
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-full
              py-3
              pl-12
              pr-6
              text-sm
              text-white
              backdrop-blur-xl
              focus:outline-none
              focus:border-yellow-400
              transition-all
            "
          />

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />

        </div>

        {/* RIGHT */}
        <div className="flex items-center space-x-6 md:space-x-8">

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative text-white hover:text-yellow-400 transition-colors">
            <Heart className="w-5 h-5" />
          </Link>

          {/* CART */}
          <Link to="/cart" className="relative text-white hover:text-yellow-400 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </Link>

          {/* PROFILE */}
          <button
            onClick={user ? () => navigate("/profile") : openAuth}
            className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
          >
            <div className="w-9 h-9 rounded-full border border-yellow-400/30 overflow-hidden">
              {user?.photoURL ? (
                <img src={user.photoURL} className="w-full h-full object-cover" />
              ) : (
                <UserIcon className="w-full h-full p-1.5" />
              )}
            </div>
          </button>

        </div>
      </div>

      {/* MOBILE SEARCH */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-full
                py-3
                px-5
                text-sm
                text-white
                backdrop-blur-xl
                focus:outline-none
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
```

---

# Complete `Footer.tsx`

````tsx
import { Mail, MapPin, Instagram, Facebook, Youtube, Share2, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <footer className="relative bg-dawn border-t border-gold/20 pt-32 pb-12 overflow-hidden">
      {/* Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none rotate-infinite">
        <img src="https://www.transparenttextures.com/patterns/mandala.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">

          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">Our Story</h3>
            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              "Recreate873 was born in Hyderabad in 2020 with a single belief — that Indian traditional wear deserves to be worn every day, not just on special occasions."
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">Artisanry</h3>
            <p className="text-sm font-serif italic text-pearl/60 leading-relaxed">
              Every garment is crafted by skilled artisans from Varanasi, Kanchipuram, and Lucknow.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">Ethics</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-1.5 rounded-full bg-ember" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pearl/60">Fair Wages Above Market</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-accent gold-gradient-text tracking-tighter">Connect</h3>

            <div className="space-y-4 text-sm font-serif italic text-pearl/60">
              <p className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </p>

              <p className="flex items-center space-x-4">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>recreate873@gmail.com</span>
              </p>

              <div className="flex items-center space-x-6 pt-4">
                <a href="https://instagram.com/recreate873" target="_blank" className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all">
                  <Instagram className="w-5 h-5" />
                </a>

                <a href="#" className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transition-all">
                  <Facebook className="w-5 h-5" />
                </a>

                <a href="#" className="p-3 glass rounded-full hover:bg-gold/10 hover:text-gold transit

Replace ONLY the video section with this:

```tsx
{/* VIDEO BACKGROUND */}
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  disablePictureInPicture
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    brightness-[0.42]
    contrast-[1.05]
    saturate-[1.05]
    will-change-transform
    transform-gpu
  "
>
  <source src={timelineVideo} type="video/mp4" />
</video>
````
