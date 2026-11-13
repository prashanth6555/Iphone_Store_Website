import { Link, Route, Routes, useLocation } from "react-router-dom";
import CartToast from "./components/CartToast";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollReset from "./components/ScrollReset";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ProductDetail from "./pages/ProductDetail";

function NotFound() {
  return (
    <div className="flex min-h-[80svh] w-full flex-col items-center justify-center px-6 pt-20 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">Page not found</h1>
      <Link to="/" className="btn btn-fill mt-6">
        Back home
      </Link>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="w-full min-w-0 bg-white text-[#1d1d1f]">
      <Navbar />
      <ScrollReset />
      <main id="content" key={location.pathname} className="page-enter w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/iphone"
            element={
              <Catalog
                category="iphone"
                eyebrow="Shop"
                title="iPhone"
                subtitle="Pro, everyday, and compact. Pick a finish, then a size of storage."
              />
            }
          />
          <Route
            path="/accessories"
            element={
              <Catalog
                category="accessory"
                eyebrow="Shop"
                title="Accessories"
                subtitle="Sound, time, power, and a case that still lets the color through."
              />
            }
          />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CartToast />
    </div>
  );
}
