import {
  Search,
  Heart,
  ShoppingCart,
  User as UserIcon,
  ArrowLeft,
  MessageCircle
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

  // 👉 WhatsApp owner number (CHANGE THIS)
  const whatsappNumber = "919876543210";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hi%20I%20am%20interested%20in%20your%20products`,
      "_blank"
    );
  };

  return (
    <nav className="
      fixed top-0 left-0 w-full z-[100]
      bg-black/30 backdrop-blur-2xl
      border-b border-white/10
      px-6 py-4
    ">

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="
                w-10 h-10 rounded-full
                border border-white/10
                bg-white/5 flex items-center justify-center
                text-white hover:bg-yellow-400 hover:text-black
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
              font-accent gold-gradient-text
              tracking-tighter shrink-0
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
              w-full bg-white/5 border border-white/10
              rounded-full py-3 pl-12 pr-6
              text-sm text-white backdrop-blur-xl
              focus:outline-none focus:border-yellow-400
              transition-all
            "
          />

          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />

        </div>

        {/* RIGHT */}
        <div className="flex items-center space-x-6 md:space-x-8">

          {/* WHATSAPP ICON (NEW FIXED FEATURE) */}
          <button
            onClick={handleWhatsAppClick}
            className="text-green-400 hover:text-green-300 transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>

          {/* MOBILE SEARCH */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden text-white"
          >
            <Search className="w-5 h-5" />
          </button>

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
                w-full bg-white/5 border border-white/10
                rounded-full py-3 px-5 text-sm text-white
                backdrop-blur-xl focus:outline-none
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}