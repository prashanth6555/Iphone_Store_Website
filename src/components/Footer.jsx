import { Link } from "react-router-dom";
import { navLinks, storeInfo } from "../data/products";
import { FacebookIcon, InstagramIcon, LogoMark, XIcon, YouTubeIcon } from "./Icons";

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
  { label: "X", href: "https://x.com", icon: XIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="grid w-full gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <LogoMark />
            <span className="text-lg font-semibold tracking-tight">iStore</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            A premium shop for the latest iPhone, the accessories that travel with it, and offers worth opening.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:scale-105 hover:border-white/40 hover:text-white"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Shop</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/75 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/cart" className="text-white/75 transition hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Visit</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li>{storeInfo.address}</li>
            <li>{storeInfo.city}</li>
            <li>{storeInfo.hours}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={storeInfo.phoneHref} className="text-white/75 transition hover:text-white">
                {storeInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${storeInfo.email}`} className="text-white/75 transition hover:text-white">
                {storeInfo.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-[#2997ff] hover:underline">
                Send a message
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 border-t border-white/10 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} iStore. Demo storefront. No payment is processed.</p>
        <p>Prices shown in USD and saved on this device.</p>
      </div>
    </footer>
  );
}
