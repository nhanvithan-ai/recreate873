import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthOverlay from "./components/AuthOverlay";
import { ShopProvider } from "./context/ShopContext";

// Pages
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import CategoryPage from "./pages/CategoryPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />

      <AuthOverlay />
    </>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />

        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ShopProvider>
  );
}