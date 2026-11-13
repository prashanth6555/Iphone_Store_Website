export const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/iphone", label: "iPhone" },
  { to: "/accessories", label: "Accessories" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
];

export const storeInfo = {
  name: "iStore",
  phone: "(415) 555-0148",
  phoneHref: "tel:+14155550148",
  email: "hello@istore.example",
  address: "120 Market Street",
  city: "San Francisco, CA 94105",
  hours: "Mon–Sat 10:00–20:00 · Sun 11:00–18:00",
};

export const modelGroups = {
  pro: [
    { id: "iphone-16-pro", label: "16 Pro" },
    { id: "iphone-16-pro-max", label: "16 Pro Max" },
  ],
  standard: [
    { id: "iphone-16", label: "iPhone 16" },
    { id: "iphone-16-plus", label: "iPhone 16 Plus" },
  ],
};

const titanium = [
  { name: "Natural Titanium", hex: "#c2b8a3" },
  { name: "Black Titanium", hex: "#3a3a3c" },
  { name: "White Titanium", hex: "#f2f1ed" },
  { name: "Desert Titanium", hex: "#c4a574" },
];

const colorful = [
  { name: "Ultramarine", hex: "#3d4e9a" },
  { name: "Teal", hex: "#7ec8c3" },
  { name: "Pink", hex: "#f2b6c6" },
  { name: "Black", hex: "#1d1d1f" },
  { name: "White", hex: "#f5f5f7" },
];

export const products = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    category: "iphone",
    line: "pro",
    group: "pro",
    badge: "New",
    tagline: "Titanium, made to disappear in your hand.",
    description:
      "The pro camera, the pro chip, and a titanium frame that stays light from the first photo to the last. iPhone 16 Pro is built for people who shoot, edit, and carry it all day.",
    price: 999,
    discount: 0,
    colors: titanium,
    storage: [
      { size: "128GB", price: 999 },
      { size: "256GB", price: 1099 },
      { size: "512GB", price: 1299 },
      { size: "1TB", price: 1499 },
    ],
    specs: ["A18 Pro chip", "6.3-inch display", "48MP camera", "Titanium design"],
    highlights: [
      { title: "A18 Pro", text: "Desktop-class speed for games, edits, and the next thing you open." },
      { title: "Pro camera", text: "A 48MP main camera with optical-quality zoom that holds detail at a distance." },
      { title: "Titanium", text: "A brushed frame that is lighter than steel and finished to a quiet shine." },
      { title: "All-day battery", text: "Enough charge for a travel day of maps, music, and 4K video." },
    ],
    images: [
      { src: "/images/studio-pro.jpg", fit: "contain", stage: "light", alt: "iPhone 16 Pro front view" },
      { src: "/images/studio-hero.jpg", fit: "cover", stage: "dark", alt: "iPhone 16 Pro floating on black" },
      { src: "/images/iphone-blue.jpg", fit: "cover", stage: "photo", alt: "iPhone held in a bright room" },
    ],
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    category: "iphone",
    line: "pro",
    group: "pro",
    badge: "New",
    tagline: "Our largest display. Our longest battery.",
    description:
      "A bigger canvas for films, photos, and everything you read. iPhone 16 Pro Max pairs the pro camera system with the battery life to match a long day out.",
    price: 1199,
    discount: 0,
    colors: titanium,
    storage: [
      { size: "256GB", price: 1199 },
      { size: "512GB", price: 1399 },
      { size: "1TB", price: 1599 },
    ],
    specs: ["A18 Pro chip", "6.9-inch display", "48MP camera", "Longest battery"],
    highlights: [
      { title: "6.9-inch display", text: "More room for timelines, photos, and the film you meant to finish." },
      { title: "Pro video", text: "Shoot, crop, and share high-resolution video without leaving the phone." },
      { title: "Big battery", text: "The longest battery in the lineup, sized for travel and late shoots." },
      { title: "Titanium", text: "A large phone that still feels considered, not heavy." },
    ],
    images: [
      { src: "/images/studio-promax.jpg", fit: "contain", stage: "light", alt: "iPhone 16 Pro Max back view" },
      { src: "/images/iphone-white.jpg", fit: "cover", stage: "dark", alt: "Close view of an iPhone camera" },
      { src: "/images/iphone-colors.jpg", fit: "cover", stage: "photo", alt: "Four iPhone finishes held together" },
    ],
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    line: "everyday",
    group: "standard",
    badge: "New",
    tagline: "A brilliant camera in five finishes.",
    description:
      "iPhone 16 brings a brighter display, a faster chip, and a camera that keeps color honest. Pick a finish that feels like yours.",
    price: 799,
    discount: 0,
    colors: colorful,
    storage: [
      { size: "128GB", price: 799 },
      { size: "256GB", price: 899 },
      { size: "512GB", price: 1099 },
    ],
    specs: ["A18 chip", "6.1-inch display", "48MP camera", "Five finishes"],
    highlights: [
      { title: "A18 chip", text: "Smooth for the apps you live in, and ready for the ones you will." },
      { title: "48MP camera", text: "Crisp daylight, cleaner night shots, and portraits with a softer falloff." },
      { title: "Color", text: "Ultramarine, teal, pink, black, and white. The glass is the design." },
      { title: "USB-C", text: "One cable for your phone, your laptop, and your earbuds." },
    ],
    images: [
      { src: "/images/studio-16.jpg", fit: "contain", stage: "light", alt: "Blue iPhone 16 front view" },
      { src: "/images/iphone-colors.jpg", fit: "cover", stage: "photo", alt: "A handful of iPhone finishes" },
      { src: "/images/lifestyle.jpg", fit: "cover", stage: "photo", alt: "iPhone home screen in hand" },
    ],
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    category: "iphone",
    line: "everyday",
    group: "standard",
    badge: "New",
    tagline: "More screen. The same easy camera.",
    description:
      "iPhone 16 Plus is the everyday phone with room to spare. A larger display, a longer battery, and the finishes people stop to look at.",
    price: 899,
    discount: 0,
    colors: colorful,
    storage: [
      { size: "128GB", price: 899 },
      { size: "256GB", price: 999 },
      { size: "512GB", price: 1199 },
    ],
    specs: ["A18 chip", "6.7-inch display", "48MP camera", "All-day battery"],
    highlights: [
      { title: "6.7-inch display", text: "Maps, messages, and movies sit more comfortably in the hand." },
      { title: "Battery", text: "Sized for a day that starts early and does not slow down." },
      { title: "Camera", text: "The same 48MP camera as iPhone 16, with more screen to review on." },
      { title: "Light for its size", text: "A large phone with a finish that still feels personal." },
    ],
    images: [
      { src: "/images/studio-plus.jpg", fit: "contain", stage: "light", alt: "Pink iPhone 16 Plus" },
      { src: "/images/iphone-purple.jpg", fit: "cover", stage: "photo", alt: "iPhone unboxed with cable" },
      { src: "/images/iphone-green.jpg", fit: "cover", stage: "photo", alt: "iPhone and earbuds on a table" },
    ],
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    category: "iphone",
    line: "everyday",
    badge: "Offer",
    tagline: "A favorite, now easier to say yes to.",
    description:
      "iPhone 15 still takes a beautiful photo and still feels fast. This month it is $100 less, which makes it the smart way into a current iPhone.",
    price: 699,
    discount: 100,
    colors: [
      { name: "Pink", hex: "#f4b6c2" },
      { name: "Yellow", hex: "#f3e28a" },
      { name: "Green", hex: "#d5e8c0" },
      { name: "Blue", hex: "#d5e4f7" },
      { name: "Black", hex: "#1d1d1f" },
    ],
    storage: [
      { size: "128GB", price: 699 },
      { size: "256GB", price: 799 },
      { size: "512GB", price: 999 },
    ],
    specs: ["A16 chip", "6.1-inch display", "48MP camera", "USB-C"],
    highlights: [
      { title: "Save $100", text: "The same phone, a lower price, while this offer is on the shelf." },
      { title: "48MP camera", text: "Sharp enough to crop, natural enough to share as-is." },
      { title: "Dynamic Island", text: "Timers, music, and rides sit in the island instead of a banner." },
      { title: "USB-C", text: "Charge it with the cable you already keep in your bag." },
    ],
    images: [
      { src: "/images/iphone-white.jpg", fit: "cover", stage: "dark", alt: "iPhone 15 camera close-up" },
      { src: "/images/iphone-blue.jpg", fit: "cover", stage: "photo", alt: "Blue iPhone in hand" },
      { src: "/images/iphone-night.jpg", fit: "cover", stage: "dark", alt: "iPhone lock screen at night" },
    ],
  },
  {
    id: "iphone-se",
    name: "iPhone SE",
    category: "iphone",
    line: "compact",
    badge: "Offer",
    tagline: "Compact, quick, and $50 off.",
    description:
      "iPhone SE is the phone you can use with one hand. A familiar size, a fast chip, and a price that leaves room for the accessories.",
    price: 429,
    discount: 50,
    colors: [
      { name: "Midnight", hex: "#1d1d1f" },
      { name: "Starlight", hex: "#f2efe8" },
      { name: "Red", hex: "#bf3a30" },
    ],
    storage: [
      { size: "64GB", price: 429 },
      { size: "128GB", price: 479 },
      { size: "256GB", price: 579 },
    ],
    specs: ["A15 chip", "4.7-inch display", "Compact design", "Touch ID"],
    highlights: [
      { title: "One-hand size", text: "Small enough for a pocket, quick enough for the rest of the day." },
      { title: "Touch ID", text: "Unlock and pay with a fingerprint that lives on the front." },
      { title: "Save $50", text: "A lower price on the compact iPhone, for a limited time." },
      { title: "Classic camera", text: "Portrait mode, Smart HDR, and photos that still look like you." },
    ],
    images: [
      { src: "/images/studio-se.jpg", fit: "contain", stage: "light", alt: "Compact black iPhone SE" },
      { src: "/images/iphone-night.jpg", fit: "cover", stage: "dark", alt: "Compact iPhone on a dark surface" },
      { src: "/images/lifestyle.jpg", fit: "cover", stage: "photo", alt: "iPhone held up to the light" },
    ],
  },
  {
    id: "airpods",
    name: "AirPods",
    category: "accessory",
    line: "audio",
    badge: "Popular",
    tagline: "Instant pairing. Effortless sound.",
    description:
      "AirPods connect the moment you open the case. Clear calls, rich music, and a fit light enough to forget.",
    price: 129,
    discount: 20,
    colors: [{ name: "White", hex: "#f5f5f7" }],
    storage: [],
    specs: ["Personalized audio", "All-day case", "Sweat resistant", "Instant pairing"],
    highlights: [
      { title: "Open and play", text: "The case opens, the phone notices, and the music is already yours." },
      { title: "All-day power", text: "Hours in the ears, more hours waiting in the case." },
      { title: "Clear calls", text: "Voices stay close, even when the street does not." },
      { title: "Save $20", text: "A small offer on the earbuds people lend and never get back." },
    ],
    images: [
      { src: "/images/airpods.jpg", fit: "cover", stage: "light", alt: "White AirPods and charging case" },
      { src: "/images/studio-airpods.jpg", fit: "contain", stage: "light", alt: "AirPods case on a gray studio surface" },
      { src: "/images/iphone-green.jpg", fit: "cover", stage: "photo", alt: "AirPods beside an iPhone" },
    ],
  },
  {
    id: "watch",
    name: "Apple Watch",
    category: "accessory",
    line: "wearable",
    badge: "Essential",
    tagline: "The workouts, the messages, the quiet nudge.",
    description:
      "Apple Watch keeps the day on your wrist. Activity rings, messages, and a face you actually look at.",
    price: 399,
    discount: 0,
    colors: [
      { name: "Silver", hex: "#e3e4e6" },
      { name: "Midnight", hex: "#1d1d1f" },
      { name: "Starlight", hex: "#f2efe8" },
    ],
    storage: [],
    specs: ["Always-on display", "Health sensors", "GPS", "Swimproof"],
    highlights: [
      { title: "Fitness", text: "Rings, runs, and a nudge when the afternoon has gone still." },
      { title: "Health", text: "Heart rate, sleep, and the metrics you can show a doctor." },
      { title: "On your wrist", text: "Calls, boarding passes, and music without taking the phone out." },
      { title: "Bands", text: "Swap the sport band for something quieter when the day changes." },
    ],
    images: [
      { src: "/images/watch.jpg", fit: "cover", stage: "photo", alt: "Apple Watch on a wrist" },
      { src: "/images/watch-2.jpg", fit: "cover", stage: "light", alt: "Apple Watch with a black band" },
    ],
  },
  {
    id: "magsafe",
    name: "MagSafe Charger",
    category: "accessory",
    line: "power",
    tagline: "Snap on. Set the phone down. Walk away.",
    description:
      "MagSafe finds the coil for you. A soft magnetic click, then a faster wireless charge that stays put.",
    price: 39,
    discount: 0,
    colors: [{ name: "White", hex: "#f5f5f7" }],
    storage: [],
    specs: ["Magnetic alignment", "Wireless charge", "USB-C", "Travel size"],
    highlights: [
      { title: "Snap", text: "Magnets pull the puck into the right place. No hunting for the coil." },
      { title: "Nightstand", text: "Set it on a table and the phone stays upright enough to see." },
      { title: "USB-C", text: "Use the cable you already own." },
      { title: "Pocketable", text: "Small enough for a weekend bag." },
    ],
    images: [
      { src: "/images/studio-charge.jpg", fit: "contain", stage: "light", alt: "White MagSafe puck and braided cable" },
      { src: "/images/cable.jpg", fit: "contain", stage: "light", alt: "USB-C power adapter and cable" },
    ],
  },
  {
    id: "power-adapter",
    name: "20W USB-C Adapter",
    category: "accessory",
    line: "power",
    tagline: "A small brick for a fast top-up.",
    description:
      "The 20W USB-C Power Adapter brings a morning charge back in a hurry. Compact, cool, and happy in any outlet.",
    price: 19,
    discount: 0,
    colors: [{ name: "White", hex: "#f7f7f8" }],
    storage: [],
    specs: ["20W output", "USB-C", "Compact", "Fast charge"],
    highlights: [
      { title: "Fast charge", text: "A meaningful top-up while the coffee is still hot." },
      { title: "Small", text: "It disappears into the pocket of a backpack." },
      { title: "USB-C", text: "One port for iPhone, AirPods, and Watch chargers." },
      { title: "Everyday", text: "Keep one by the bed and one in the bag." },
    ],
    images: [
      { src: "/images/cable.jpg", fit: "contain", stage: "light", alt: "White 20W USB-C power adapter" },
      { src: "/images/studio-charge.jpg", fit: "contain", stage: "light", alt: "Charging cable coiled beside a puck" },
    ],
  },
  {
    id: "silicone-case",
    name: "Silicone Case",
    category: "accessory",
    line: "protection",
    badge: "Offer",
    tagline: "A soft grip in a quiet color.",
    description:
      "The silicone case adds a soft touch and a camera lip that meets the table first. This month it is $10 off.",
    price: 49,
    discount: 10,
    colors: [
      { name: "Stone", hex: "#d9d1c7" },
      { name: "Black", hex: "#1d1d1f" },
      { name: "Pink", hex: "#f2b6c6" },
      { name: "Blue", hex: "#3d4e9a" },
    ],
    storage: [],
    specs: ["Soft silicone", "Camera lip", "MagSafe ready", "Easy clean"],
    highlights: [
      { title: "Grip", text: "Silicone that stays in the hand when the day gets busy." },
      { title: "Camera lip", text: "The lens sits a breath above the table." },
      { title: "MagSafe", text: "Chargers and wallets still click on through the case." },
      { title: "Save $10", text: "A small reason to pick the finish you kept circling." },
    ],
    images: [
      { src: "/images/studio-case.jpg", fit: "contain", stage: "light", alt: "Stone silicone iPhone case" },
      { src: "/images/iphone-green.jpg", fit: "cover", stage: "photo", alt: "iPhone wearing a case on a wooden table" },
    ],
  },
  {
    id: "carbon-case",
    name: "Carbon Case",
    category: "accessory",
    line: "protection",
    tagline: "A thin shell with a woven look.",
    description:
      "A slim case with a carbon weave that catches the light. Protection without the bulk of a rugged shell.",
    price: 59,
    discount: 0,
    colors: [{ name: "Black", hex: "#1c1c1e" }],
    storage: [],
    specs: ["Slim profile", "Woven finish", "Raised camera", "Lightweight"],
    highlights: [
      { title: "Slim", text: "The phone keeps its shape. The case just changes the texture." },
      { title: "Weave", text: "A dark carbon pattern that looks considered, not loud." },
      { title: "Raised lip", text: "The camera and the screen sit off the surface." },
      { title: "Light", text: "Protection you notice in your hand only when you drop it." },
    ],
    images: [
      { src: "/images/case.jpg", fit: "cover", stage: "photo", alt: "Black carbon fiber iPhone case" },
      { src: "/images/iphone-back.jpg", fit: "cover", stage: "dark", alt: "Back of an iPhone in low light" },
    ],
  },
];

export function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function originalPrice(product, storageSize) {
  if (product.storage?.length) {
    if (storageSize) {
      return (
        product.storage.find((item) => item.size === storageSize)?.price ??
        product.storage[0].price
      );
    }
    return Math.min(...product.storage.map((item) => item.price));
  }
  return product.price;
}

export function salePrice(product, storageSize) {
  return Math.max(0, originalPrice(product, storageSize) - (product.discount || 0));
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

export function relatedProducts(product, count = 3) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, count);
}
