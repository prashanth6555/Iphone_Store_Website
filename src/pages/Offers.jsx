import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { products, money } from "../data/products";
import { useTitle } from "../hooks/useTitle";

export default function Offers() {
  useTitle("Offers");
  const deals = useMemo(
    () => products.filter((product) => product.discount > 0),
    [],
  );
  const [now, setNow] = useState(null);

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 12);
    end.setHours(23, 59, 0, 0);
    const tick = () => setNow(end.getTime() - Date.now());
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  const parts = now && now > 0
    ? {
        days: Math.floor(now / 86400000),
        hours: Math.floor((now / 3600000) % 24),
        minutes: Math.floor((now / 60000) % 60),
        seconds: Math.floor((now / 1000) % 60),
      }
    : null;

  return (
    <div className="w-full bg-[#f5f5f7]">
      <section className="relative flex min-h-[78svh] w-full items-end overflow-hidden bg-black text-white">
        <img
          src="/images/iphone-colors.jpg"
          alt="iPhone finishes on offer"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="relative w-full px-5 pb-14 pt-32 sm:px-10">
          <p className="text-[12px] uppercase tracking-[0.24em] text-white/70">Limited offers</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
            Save up to $100 on iPhone.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            iPhone 15, iPhone SE, AirPods, and a silicone case are priced down for this visit. The discount is already in the cart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {parts &&
              [
                ["Days", parts.days],
                ["Hours", parts.hours],
                ["Min", parts.minutes],
                ["Sec", parts.seconds],
              ].map(([label, value]) => (
                <div key={label} className="min-w-20 rounded-2xl bg-white/10 px-4 py-3 text-center backdrop-blur">
                  <p className="text-2xl font-semibold tabular-nums">{String(value).padStart(2, "0")}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">{label}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="w-full px-3 py-12 sm:px-4">
        <div className="mb-8 px-2">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Current price drops</h2>
          <p className="mt-2 text-[#6e6e73]">Strikethrough prices are the regular shelf price.</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {deals.map((product, index) => (
            <Reveal key={product.id} className="h-full" delay={index * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 px-2 text-sm text-[#6e6e73]">
          Biggest saving right now: {money(Math.max(...deals.map((product) => product.discount)))}.{" "}
          <Link to="/iphone" className="link-blue">
            Browse the full lineup
          </Link>
        </p>
      </section>
    </div>
  );
}
