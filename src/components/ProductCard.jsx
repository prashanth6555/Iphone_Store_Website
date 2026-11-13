import { Link } from "react-router-dom";
import { money, salePrice, originalPrice } from "../data/products";

const stages = {
  light: "bg-[#f2f2f4]",
  dark: "bg-black",
  photo: "bg-[#141416]",
};

export default function ProductCard({ product }) {
  const image = product.images[0];
  const current = salePrice(product);
  const original = originalPrice(product);
  const onSale = product.discount > 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
      <Link
        to={`/product/${product.id}`}
        className={`media-shine relative block aspect-[4/5] ${stages[image.stage] || stages.light}`}
      >
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1d1d1f] backdrop-blur">
          {onSale ? `Save ${money(product.discount)}` : product.badge || "iPhone"}
        </span>
        <img
          src={image.src}
          alt={image.alt}
          className={`h-full w-full transition duration-700 ease-out group-hover:scale-[1.045] ${
            image.fit === "contain" ? "object-contain p-6" : "object-cover"
          }`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">{product.name}</h3>
        <p className="mt-1 text-sm leading-6 text-[#6e6e73]">{product.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 3).map((spec) => (
            <li key={spec} className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs text-[#1d1d1f]">
              {spec}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[15px] text-[#1d1d1f]">
          {onSale && (
            <span className="mr-2 text-[#6e6e73] line-through">{money(original)}</span>
          )}
          <span className="text-lg font-semibold">From {money(current)}</span>
        </p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <Link to={`/product/${product.id}`} className="btn btn-outline px-2 text-sm">
            Explore More
          </Link>
          <Link to={`/product/${product.id}#buy`} className="btn btn-fill px-2 text-sm">
            Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
