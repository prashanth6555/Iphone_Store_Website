import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { money } from "../data/products";
import { useTitle } from "../hooks/useTitle";

const fieldClass =
  "w-full rounded-2xl border border-black/10 bg-[#f5f5f7] px-4 py-3 text-[15px] outline-none transition focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postal: "",
  method: "Card",
};

export default function Cart() {
  useTitle("Cart");
  const { items, total, savings, updateQty, removeItem, clear } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function placeOrder(event) {
    event.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter the name for the order.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 7) next.phone = "Enter a phone number.";
    if (form.address.trim().length < 5) next.address = "Enter a street address.";
    if (form.city.trim().length < 2) next.city = "Enter a city.";
    if (form.postal.trim().length < 4) next.postal = "Enter a postal code.";
    setErrors(next);
    if (Object.keys(next).length || items.length === 0) return;

    const record = {
      id: `IS-${Date.now().toString().slice(-8)}`,
      items,
      total,
      savings,
      customer: form,
      createdAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("istore-orders") || "[]");
      localStorage.setItem("istore-orders", JSON.stringify([record, ...existing].slice(0, 10)));
    } catch {
      /* Confirmation still shows if storage is blocked. */
    }
    clear();
    setOrder(record);
    setCheckingOut(false);
  }

  if (order) {
    return (
      <div className="flex min-h-[100svh] w-full items-center justify-center bg-[#f5f5f7] px-5 pt-20">
        <div className="rise w-full max-w-lg rounded-[28px] bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#6e6e73]">Order confirmed</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{order.id}</h1>
          <p className="mt-4 text-[#6e6e73]">
            Thanks, {order.customer.name.split(" ")[0]}. Your demo order for {money(order.total)} is saved on this
            device. No payment was taken.
          </p>
          <Link to="/iphone" className="btn btn-fill mt-8">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-[100svh] w-full bg-[#f5f5f7] pt-12 lg:grid-cols-[minmax(0,1fr)_400px]">
      <section className="w-full px-3 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">Cart</h1>
        <p className="mt-2 text-[#6e6e73]">
          {items.length === 0 ? "Your cart is waiting for an iPhone." : `${items.length} ${items.length === 1 ? "product" : "products"}`}
        </p>

        {items.length === 0 ? (
          <div className="mt-10 overflow-hidden rounded-[28px] bg-black text-white">
            <img src="/images/studio-hero.jpg" alt="" className="h-64 w-full object-cover" />
            <div className="px-6 py-8">
              <h2 className="text-2xl font-semibold">Start with iPhone 16 Pro.</h2>
              <Link to="/iphone" className="btn btn-light mt-5">
                Browse iPhone
              </Link>
            </div>
          </div>
        ) : (
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li key={item.key} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 rounded-3xl bg-white p-3 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:p-4">
                <Link
                  to={`/product/${item.id}`}
                  className="grid place-items-center overflow-hidden rounded-2xl bg-[#f5f5f7]"
                >
                  <img src={item.image} alt="" className="h-24 w-full object-contain p-2 sm:h-28" />
                </Link>
                <div className="min-w-0 py-1">
                  <Link to={`/product/${item.id}`} className="text-lg font-semibold tracking-tight hover:underline">
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-[#6e6e73]">
                    {[item.color, item.storage].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-2 text-sm">
                    {item.original > item.price && (
                      <span className="mr-2 text-[#6e6e73] line-through">{money(item.original)}</span>
                    )}
                    {money(item.price)}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-black/10">
                      <button
                        type="button"
                        className="h-9 w-9"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => updateQty(item.key, item.qty - 1)}
                      >
                        −
                      </button>
                      <input
                        aria-label={`${item.name} quantity`}
                        className="w-8 bg-transparent text-center text-sm outline-none"
                        inputMode="numeric"
                        value={item.qty}
                        onChange={(event) => updateQty(item.key, event.target.value)}
                      />
                      <button
                        type="button"
                        className="h-9 w-9"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => updateQty(item.key, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-sm text-[#6e6e73] underline-offset-2 hover:text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="hidden self-center text-lg font-semibold sm:block">{money(item.price * item.qty)}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <aside className="w-full border-black/5 bg-white px-5 py-8 sm:px-8 lg:border-l lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Summary</h2>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-[#6e6e73]">Subtotal</dt>
            <dd>{money(total)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#6e6e73]">Shipping</dt>
            <dd>Free</dd>
          </div>
          {savings > 0 && (
            <div className="flex justify-between text-[#0071e3]">
              <dt>Offer savings</dt>
              <dd>−{money(savings)}</dd>
            </div>
          )}
          <div className="flex justify-between border-t border-black/10 pt-3 text-lg font-semibold">
            <dt>Total</dt>
            <dd>{money(total)}</dd>
          </div>
        </dl>

        {!checkingOut ? (
          <button
            type="button"
            className="btn btn-fill mt-6 w-full"
            disabled={items.length === 0}
            onClick={() => setCheckingOut(true)}
          >
            Checkout
          </button>
        ) : (
          <form onSubmit={placeOrder} noValidate className="mt-6 space-y-3">
            <p className="text-sm text-[#6e6e73]">Demo checkout. Your details stay in this browser.</p>
            {[
              ["name", "Full name", "text"],
              ["email", "Email", "email"],
              ["phone", "Phone", "tel"],
              ["address", "Address", "text"],
              ["city", "City", "text"],
              ["postal", "Postal code", "text"],
            ].map(([name, label, type]) => (
              <label key={name} className="block text-sm">
                {label}
                <input
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={update}
                  className={`${fieldClass} mt-1`}
                />
                {errors[name] && <span className="mt-1 block text-xs text-red-600">{errors[name]}</span>}
              </label>
            ))}
            <fieldset>
              <legend className="text-sm">Payment</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {["Card", "Pay in store"].map((method) => (
                  <label
                    key={method}
                    className={`cursor-pointer rounded-2xl border px-3 py-3 text-center text-sm ${
                      form.method === method ? "border-[#0071e3] bg-[#0071e3]/5" : "border-black/10"
                    }`}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={method}
                      checked={form.method === method}
                      onChange={update}
                      className="sr-only"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>
            <button type="submit" className="btn btn-fill w-full">
              Place order · {money(total)}
            </button>
            <button type="button" className="btn btn-line w-full" onClick={() => setCheckingOut(false)}>
              Back to summary
            </button>
          </form>
        )}
        <p className="mt-4 text-xs leading-5 text-[#6e6e73]">
          Taxes are included in the demo prices. Placing an order clears the cart and stores a receipt locally.
        </p>
      </aside>
    </div>
  );
}
