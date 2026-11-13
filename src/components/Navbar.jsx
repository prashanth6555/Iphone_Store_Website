import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/products";
import { useCart } from "../context/CartContext";
import { BagIcon, CloseIcon, LogoMark, MenuIcon } from "./Icons";

export default function Navbar() {
  const { count } = useCart();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!count) return undefined;
    setPop(true);
    const timer = setTimeout(() => setPop(false), 450);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full text-white transition-colors duration-300 ${
        scrolled || open ? "bg-black/85 backdrop-blur-xl" : "bg-black/55 backdrop-blur-md"
      }`}
    >
      <nav className="relative flex h-12 w-full items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <Link to="/" className="relative z-10 flex items-center gap-2 text-white" aria-label="iStore home">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">iStore</span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-[13px] transition-colors duration-200 hover:text-white ${
                    isActive ? "text-white" : "text-white/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-1">
          <Link
            to="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white"
            aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`}
          >
            <BagIcon />
            {count > 0 && (
              <span
                className={`absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#0071e3] px-1 text-[10px] font-semibold leading-none text-white ${
                  pop ? "animate-pop" : ""
                }`}
              >
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-12 bottom-0 z-40 bg-black/95 backdrop-blur-xl transition duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pt-6">
          {navLinks.map((link, index) => (
            <li key={link.to} className="border-b border-white/10">
              <NavLink
                to={link.to}
                end={link.end}
                style={{ animationDelay: `${index * 50}ms` }}
                className={({ isActive }) =>
                  `block py-4 text-3xl font-semibold tracking-tight ${open ? "rise" : ""} ${
                    isActive ? "text-white" : "text-white/75"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-6">
            <Link to="/cart" className="btn btn-light w-full">
              View Cart{count > 0 ? ` (${count})` : ""}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
