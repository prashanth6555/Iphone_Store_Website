import { useState } from "react";
import { storeInfo } from "../data/products";
import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon } from "../components/Icons";
import { useTitle } from "../hooks/useTitle";

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
  { label: "X", href: "https://x.com", icon: XIcon },
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
];

const fieldClass =
  "w-full rounded-2xl border border-black/10 bg-[#f5f5f7] px-4 py-3 text-[15px] outline-none transition focus:border-[#0071e3] focus:bg-white focus:ring-4 focus:ring-[#0071e3]/15";

const empty = { name: "", email: "", topic: "Order help", message: "" };

export default function Contact() {
  useTitle("Contact");
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email.";
    if (form.message.trim().length < 10) next.message = "Tell us a little more.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const note = {
      ...form,
      createdAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("istore-messages") || "[]");
      localStorage.setItem("istore-messages", JSON.stringify([note, ...existing].slice(0, 20)));
    } catch {
      /* The thank-you state still confirms the form. */
    }
    setSent(true);
    setForm(empty);
  }

  return (
    <div className="grid min-h-[100svh] w-full lg:grid-cols-2">
      <section className="w-full bg-black px-6 pb-16 pt-28 text-white sm:px-10 lg:px-14">
        <p className="text-[12px] uppercase tracking-[0.24em] text-white/50">Contact</p>
        <h1 className="mt-3 max-w-md text-5xl font-semibold tracking-[-0.045em]">
          We are on Market Street.
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/70">
          Ask about an order, a finish that is out, or which iPhone fits the way you shoot.
        </p>
        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="text-white/45">Visit</dt>
            <dd className="mt-1 text-lg">
              {storeInfo.address}
              <br />
              {storeInfo.city}
            </dd>
          </div>
          <div>
            <dt className="text-white/45">Hours</dt>
            <dd className="mt-1 text-lg">{storeInfo.hours}</dd>
          </div>
          <div>
            <dt className="text-white/45">Call or write</dt>
            <dd className="mt-1 text-lg">
              <a href={storeInfo.phoneHref} className="hover:underline">
                {storeInfo.phone}
              </a>
              <br />
              <a href={`mailto:${storeInfo.email}`} className="hover:underline">
                {storeInfo.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-10 flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:scale-105 hover:bg-white hover:text-black"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </section>

      <section className="flex w-full items-center bg-white px-6 py-16 pt-28 sm:px-10 lg:px-16">
        <div className="w-full max-w-xl">
          {sent ? (
            <div className="rise">
              <p className="text-sm text-[#6e6e73]">Message received</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight">Thanks. We will write back.</h2>
              <p className="mt-3 text-[#6e6e73]">
                This demo keeps your note on this device. Nothing is sent to a server.
              </p>
              <button type="button" className="btn btn-dark mt-8" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">Send a message</h2>
                <p className="mt-2 text-sm text-[#6e6e73]">We reply on business days.</p>
              </div>
              <label className="block text-sm">
                Name
                <input name="name" value={form.name} onChange={update} className={`${fieldClass} mt-1.5`} />
                {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
              </label>
              <label className="block text-sm">
                Email
                <input name="email" type="email" value={form.email} onChange={update} className={`${fieldClass} mt-1.5`} />
                {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
              </label>
              <label className="block text-sm">
                Topic
                <select name="topic" value={form.topic} onChange={update} className={`${fieldClass} mt-1.5`}>
                  <option>Order help</option>
                  <option>Product question</option>
                  <option>Store visit</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="block text-sm">
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={update}
                  className={`${fieldClass} mt-1.5 resize-y`}
                />
                {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
              </label>
              <button type="submit" className="btn btn-fill w-full">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
