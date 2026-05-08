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

  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

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

          {/* BACK BUTTON */}
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                hover:bg-yellow-400
                hover:text-black
                transition-all
              "
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          {/* LOGO */}
          <Link
            to="/"
            className="
              text-2xl
              md:text-3xl
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

          <Search
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-4
              h-4
              text-white/40
            "
          />

          {/* SEARCH RESULTS */}
          <AnimatePresence>
            {search.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="
                  absolute
                  top-16
                  left-0
                  w-full
                  rounded-3xl
                  bg-black/95
                  border
                  border-white/10
                  backdrop-blur-3xl
                  overflow-hidden
                  shadow-2xl
                "
              >

                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        navigate(`/product/${product.id}`);
                        setSearch("");
                      }}
                      className="
                        w-full
                        flex
                        items-center
                        gap-4
                        p-4
                        hover:bg-white/5
                        transition-all
                        border-b
                        border-white/5
                      "
                    >

                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          object-cover
                        "
                      />

                      <div className="text-left">

                        <h4 className="text-white text-sm font-medium">
                          {product.name}
                        </h4>

                        <p className="text-yellow-400 text-xs uppercase tracking-widest mt-1">
                          {product.category}
                        </p>

                      </div>

                    </button>
                  ))
                ) : (
                  <div className="p-6 text-center text-white/50 text-sm">
                    No products found
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* RIGHT */}
        <div className="flex items-center space-x-6 md:space-x-8">

          {/* MOBILE SEARCH */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden text-white"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="
              relative
              text-white
              hover:text-yellow-400
              transition-colors
            "
          >

            <Heart className="w-5 h-5" />

            <AnimatePresence>
              {wishlist.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="
                    absolute
                    -top-2
                    -right-2
                    bg-orange-500
                    text-white
                    text-[10px]
                    font-bold
                    w-4
                    h-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {wishlist.length}
                </motion.span>
              )}
            </AnimatePresence>

          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="
              relative
              text-white
              hover:text-yellow-400
              transition-colors
            "
          >

            <ShoppingCart className="w-5 h-5" />

            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="
                    absolute
                    -top-2
                    -right-2
                    bg-yellow-400
                    text-black
                    text-[10px]
                    font-bold
                    w-4
                    h-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>

          </Link>

          {/* PROFILE */}
          <button
            onClick={user ? () => navigate("/profile") : openAuth}
            className="
              flex
              items-center
              space-x-2
              text-white
              hover:text-yellow-400
              transition-colors
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-full
                border
                border-yellow-400/30
                p-0.5
                overflow-hidden
              "
            >

              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                  "
                />
              ) : (
                <UserIcon className="w-full h-full p-1.5" />
              )}

            </div>

            <span className="hidden lg:inline text-xs uppercase tracking-widest">
              {user
                ? user.displayName?.split(" ")[0] || "Aura"
                : "Login"}
            </span>

          </button>

        </div>

      </div>

      {/* MOBILE SEARCH BAR */}
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