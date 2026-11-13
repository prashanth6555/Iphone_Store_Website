import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import { products, salePrice } from "../data/products";
import { useTitle } from "../hooks/useTitle";

const phoneFilters = [
  { id: "all", label: "All" },
  { id: "pro", label: "Pro" },
  { id: "everyday", label: "Everyday" },
  { id: "compact", label: "Compact" },
];

export default function Catalog({ category, eyebrow, title, subtitle }) {
  useTitle(title);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    setFilter("all");
    setSort("featured");
  }, [category]);

  const list = useMemo(() => {
    let next = products.filter((product) => product.category === category);
    if (category === "iphone" && filter !== "all") {
      next = next.filter((product) => product.line === filter);
    }
    next = [...next];
    if (sort === "price-asc") next.sort((a, b) => salePrice(a) - salePrice(b));
    if (sort === "price-desc") next.sort((a, b) => salePrice(b) - salePrice(a));
    return next;
  }, [category, filter, sort]);

  return (
    <div className="w-full bg-[#f5f5f7]">
      <header className="w-full bg-black px-5 pb-16 pt-28 text-center text-white sm:pt-32">
        <p className="text-[12px] uppercase tracking-[0.24em] text-white/50">{eyebrow}</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{subtitle}</p>
      </header>

      <div className="w-full px-3 py-8 sm:px-4 sm:py-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {category === "iphone" ? (
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter iPhone models">
              {phoneFilters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === item.id}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    filter === item.id ? "bg-black text-white" : "bg-white text-[#1d1d1f] hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#6e6e73]">{list.length} pieces</p>
          )}

          <label className="flex items-center gap-2 text-sm text-[#6e6e73]">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-[#1d1d1f] outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>
        </div>

        {list.length === 0 ? (
          <p className="py-20 text-center text-[#6e6e73]">Nothing in this filter yet.</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
            {list.map((product, index) => (
              <Reveal key={product.id} className="h-full" delay={Math.min(index, 6) * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
