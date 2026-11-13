import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { products } from "../data/products";
import { useTitle } from "../hooks/useTitle";

const heroStats = [
  { label: "Chip", value: "A18 Pro" },
  { label: "Camera", value: "48MP" },
  { label: "Design", value: "Titanium" },
  { label: "Display", value: "6.3″" },
];

const features = [
  {
    title: "A camera that waits for the light",
    text: "48 megapixels, a longer zoom, and night shots that keep the color of the room.",
  },
  {
    title: "A chip with room to spare",
    text: "Games, edits, and a dozen open tabs still feel like the first one you launched.",
  },
  {
    title: "A frame you forget you are holding",
    text: "Titanium keeps the pro models light, quiet, and cool against the palm.",
  },
  {
    title: "A battery that outlasts the plan",
    text: "Maps in the morning, photos at dusk, and a charge that is still there.",
  },
];

export default function Home() {
  useTitle("Home");
  const phones = products.filter((product) => product.category === "iphone");
  const accessories = products.filter((product) => product.category === "accessory").slice(0, 4);

  return (
    <div className="w-full">
      <section className="flex min-h-[100svh] w-full flex-col overflow-hidden bg-black text-white">
        <div className="relative z-10 px-5 pt-24 text-center sm:pt-28">
          <p className="rise text-[12px] uppercase tracking-[0.28em] text-white/60">The latest iPhone</p>
          <h1
            className="rise mt-3 text-[52px] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl md:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            iPhone 16 Pro
          </h1>
          <p
            className="rise mx-auto mt-4 max-w-xl text-lg text-white/75 sm:text-2xl"
            style={{ animationDelay: "160ms" }}
          >
            Titanium. So light it feels like the photo is the only thing you are carrying.
          </p>
          <div className="rise mt-7 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "240ms" }}>
            <Link to="/product/iphone-16-pro#buy" className="btn btn-light">
              Buy Now
            </Link>
            <Link to="/product/iphone-16-pro" className="btn btn-ghost">
              Explore More
            </Link>
          </div>
        </div>

        <div className="relative mt-4 min-h-[340px] w-full flex-1">
          <div className="animate-glow pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute inset-[-6%] overflow-hidden">
            <img
              src="/images/studio-hero.jpg"
              alt="iPhone 16 Pro in titanium, floating on black"
              className="animate-drift h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <ul className="relative z-10 grid w-full grid-cols-2 border-t border-white/10 md:grid-cols-4">
          {heroStats.map((stat) => (
            <li key={stat.label} className="px-4 py-5 text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
              <p className="mt-1 text-lg font-medium">{stat.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid w-full bg-black md:grid-cols-2">
        <article className="flex min-h-[680px] w-full flex-col items-center overflow-hidden bg-[#e9edf5] px-6 pt-16 text-center text-[#1d1d1f]">
          <p className="text-sm text-[#6e6e73]">iPhone 16</p>
          <h2 className="mt-2 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Color, tuned.</h2>
          <p className="mt-3 max-w-md text-lg text-[#3a3a3c]">Five finishes. A camera that keeps the day honest.</p>
          <div className="mt-5 flex gap-5 text-lg">
            <Link to="/product/iphone-16" className="link-blue">
              Explore More
            </Link>
            <Link to="/product/iphone-16#buy" className="link-blue">
              Buy Now
            </Link>
          </div>
          <img
            src="/images/studio-16.jpg"
            alt="Ultramarine iPhone 16"
            className="animate-float mt-8 w-[min(460px,88%)]"
          />
        </article>

        <article className="relative flex min-h-[680px] w-full flex-col items-center overflow-hidden bg-black px-6 pt-16 text-center text-white">
          <img
            src="/images/iphone-colors.jpg"
            alt="Four iPhone finishes"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/80" />
          <div className="relative">
            <p className="text-sm text-white/70">This month</p>
            <h2 className="mt-2 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">Save $100.</h2>
            <p className="mx-auto mt-3 max-w-md text-lg text-white/80">
              iPhone 15 is on offer. Same camera. A price that is easier to take home.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/offers" className="btn btn-light">
                Shop Offers
              </Link>
              <Link to="/product/iphone-15" className="btn btn-ghost">
                Explore More
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full bg-[#f5f5f7] px-3 py-16 sm:px-4 md:py-20">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm text-[#6e6e73]">The lineup</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-5xl">
            Find your iPhone.
          </h2>
          <p className="mt-3 text-lg text-[#6e6e73]">
            Compare finishes, storage, and the price you will actually pay.
          </p>
        </Reveal>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
          {phones.map((product, index) => (
            <Reveal key={product.id} className="h-full" delay={index * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-black text-white">
        <div className="grid w-full md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 80}
              className="border-t border-white/10 px-6 py-12 first:border-t-0 md:border-t-0 md:border-l md:px-8 md:first:border-l-0"
            >
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/40">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid w-full items-center bg-[#f5f5f7] lg:grid-cols-2">
        <div className="px-6 py-16 sm:px-10 lg:py-24">
          <p className="text-sm text-[#6e6e73]">Accessories</p>
          <h2 className="mt-2 max-w-lg text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            The pieces that travel with it.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#6e6e73]">
            Earbuds, a watch, a charger that snaps into place, and a case in the color you wanted.
          </p>
          <Link to="/accessories" className="btn btn-dark mt-8">
            Shop Accessories
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <img src="/images/airpods.jpg" alt="AirPods" className="aspect-square h-full w-full object-cover" />
          <img src="/images/watch.jpg" alt="Apple Watch" className="aspect-square h-full w-full object-cover" />
          <img src="/images/studio-case.jpg" alt="Silicone case" className="aspect-square h-full w-full object-cover" />
          <img src="/images/studio-charge.jpg" alt="MagSafe charger" className="aspect-square h-full w-full object-cover" />
        </div>
      </section>

      <section className="w-full bg-white px-3 py-16 sm:px-4">
        <div className="mb-8 flex items-end justify-between gap-4 px-2">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Essentials</h2>
          <Link to="/accessories" className="link-blue text-sm">
            Explore More
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {accessories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
