import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import {
  getProduct,
  modelGroups,
  money,
  originalPrice,
  relatedProducts,
  salePrice,
} from "../data/products";
import { useTitle } from "../hooks/useTitle";

const stages = {
  light: "bg-[#f3f3f5]",
  dark: "bg-black",
  photo: "bg-[#111113]",
};

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = getProduct(id);
  useTitle(product?.name || "Product");

  const { addItem } = useCart();
  const [imageIndex, setImageIndex] = useState(0);
  const [color, setColor] = useState(product?.colors[0]?.name || "");
  const [storage, setStorage] = useState(product?.storage[0]?.size || "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const next = getProduct(id);
    if (!next) return;
    setImageIndex(0);
    setColor(next.colors[0]?.name || "");
    setStorage(next.storage[0]?.size || "");
    setQty(1);
    setAdded(false);
  }, [id]);

  useEffect(() => {
    if (location.hash !== "#buy") return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [id, location.hash]);

  if (!product) {
    return (
      <div className="flex min-h-[80svh] w-full flex-col items-center justify-center px-6 pt-20 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">That product has left the lineup.</h1>
        <Link to="/iphone" className="btn btn-fill mt-6">
          Browse iPhone
        </Link>
      </div>
    );
  }

  const active = product.images[imageIndex] ?? product.images[0];
  const selectedColor = product.colors.find((item) => item.name === color) || product.colors[0];
  const current = salePrice(product, storage);
  const original = originalPrice(product, storage);
  const models = product.group ? modelGroups[product.group] : [];
  const related = relatedProducts(product, 3);

  function addToCart() {
    addItem({
      key: `${product.id}__${color}__${storage}`,
      id: product.id,
      name: product.name,
      image: product.images[0].src,
      color,
      storage,
      price: current,
      original,
      qty,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="w-full bg-white pt-12">
      <div className="grid w-full items-start gap-8 px-3 py-6 sm:px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-8 lg:py-10">
        <div>
          <div
            className={`relative overflow-hidden rounded-[28px] ${stages[active.stage] || stages.light}`}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl transition duration-500"
              style={{ background: selectedColor?.hex || "#ddd", opacity: 0.45 }}
            />
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              className={`rise relative aspect-[4/5] w-full sm:aspect-[5/4] ${
                active.fit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover"
              }`}
            />
            {product.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() =>
                    setImageIndex((index) => (index - 1 + product.images.length) % product.images.length)
                  }
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow transition hover:scale-105"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setImageIndex((index) => (index + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-xl shadow transition hover:scale-105"
                >
                  ›
                </button>
              </>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    index === imageIndex ? "border-[#0071e3]" : "border-transparent"
                  } ${stages[image.stage] || stages.light}`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className={`aspect-[4/3] w-full ${image.fit === "contain" ? "object-contain p-2" : "object-cover"}`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div id="buy" className="lg:sticky lg:top-20">
          <p className="text-sm text-[#6e6e73]">{product.category === "iphone" ? "iPhone" : "Accessory"}</p>
          <h1 className="mt-1 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-lg text-[#3a3a3c]">{product.tagline}</p>
          <p className="mt-5 text-3xl font-semibold tracking-tight">
            {product.discount > 0 && (
              <span className="mr-3 text-xl font-medium text-[#6e6e73] line-through">{money(original)}</span>
            )}
            {money(current)}
          </p>
          {product.discount > 0 && (
            <p className="mt-1 text-sm font-medium text-[#0071e3]">You save {money(product.discount)}</p>
          )}
          <p className="mt-4 text-sm leading-6 text-[#6e6e73]">{product.description}</p>

          {models.length > 1 && (
            <fieldset className="mt-7">
              <legend className="text-sm font-medium">Model</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {models.map((model) => {
                  const activeModel = model.id === product.id;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => navigate(`/product/${model.id}${location.hash || ""}`)}
                      className={`rounded-2xl border px-3 py-3 text-sm transition ${
                        activeModel
                          ? "border-[#0071e3] bg-[#0071e3]/5 text-[#0071e3]"
                          : "border-black/10 hover:border-black/30"
                      }`}
                    >
                      {model.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          {product.colors.length > 0 && (
            <fieldset className="mt-7">
              <legend className="text-sm font-medium">
                Color <span className="font-normal text-[#6e6e73]">· {color}</span>
              </legend>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.colors.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    aria-label={swatch.name}
                    aria-pressed={color === swatch.name}
                    onClick={() => setColor(swatch.name)}
                    className={`h-9 w-9 rounded-full border transition hover:scale-110 ${
                      color === swatch.name ? "ring-2 ring-[#0071e3] ring-offset-2" : "border-black/10"
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </fieldset>
          )}

          {product.storage.length > 0 && (
            <fieldset className="mt-7">
              <legend className="text-sm font-medium">Storage</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {product.storage.map((option) => {
                  const optionPrice = salePrice(product, option.size);
                  const selected = storage === option.size;
                  return (
                    <button
                      key={option.size}
                      type="button"
                      onClick={() => setStorage(option.size)}
                      className={`rounded-2xl border px-3 py-3 text-left transition ${
                        selected ? "border-[#0071e3] bg-[#0071e3]/5" : "border-black/10 hover:border-black/30"
                      }`}
                    >
                      <span className="block text-sm font-medium">{option.size}</span>
                      <span className="text-xs text-[#6e6e73]">{money(optionPrice)}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          <div className="mt-7 flex items-center justify-between">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center rounded-full border border-black/10">
              <button
                type="button"
                className="h-10 w-10 text-lg"
                aria-label="Decrease quantity"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
              >
                −
              </button>
              <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
              <button
                type="button"
                className="h-10 w-10 text-lg"
                aria-label="Increase quantity"
                onClick={() => setQty((value) => Math.min(10, value + 1))}
              >
                +
              </button>
            </div>
          </div>

          <button type="button" onClick={addToCart} className="btn btn-fill mt-6 w-full text-base">
            {added ? "Added to Cart" : `Add to Cart · ${money(current * qty)}`}
          </button>
          <Link to="/cart" className="btn btn-line mt-3 w-full">
            Go to Cart
          </Link>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {product.specs.map((spec) => (
              <li key={spec} className="rounded-2xl bg-[#f5f5f7] px-3 py-3 text-sm">
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="w-full bg-[#f5f5f7] px-3 py-14 sm:px-5 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Why this one</h2>
        <div className="mt-6 grid w-full gap-3 md:grid-cols-2 xl:grid-cols-4">
          {product.highlights.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="w-full px-3 py-14 sm:px-5 lg:px-8">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">You may also like</h2>
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
