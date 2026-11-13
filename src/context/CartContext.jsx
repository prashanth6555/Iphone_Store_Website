import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "istore-cart";
const CartContext = createContext(null);

function readCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* Storage can fail in private mode. The cart still works for this visit. */
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const savings = items.reduce(
      (sum, item) => sum + item.qty * Math.max(0, (item.original ?? item.price) - item.price),
      0,
    );

    return {
      items,
      count,
      total,
      savings,
      toast,
      dismissToast: () => setToast(null),
      addItem(item) {
        setItems((current) => {
          const index = current.findIndex((entry) => entry.key === item.key);
          if (index === -1) return [...current, item];
          return current.map((entry, entryIndex) =>
            entryIndex === index
              ? { ...entry, qty: Math.min(10, entry.qty + item.qty), price: item.price }
              : entry,
          );
        });
        setToast({
          name: item.name,
          detail: [item.color, item.storage].filter(Boolean).join(" · "),
        });
      },
      removeItem(key) {
        setItems((current) => current.filter((item) => item.key !== key));
      },
      updateQty(key, qty) {
        const nextQty = Math.max(1, Math.min(10, Number(qty) || 1));
        setItems((current) =>
          current.map((item) => (item.key === key ? { ...item, qty: nextQty } : item)),
        );
      },
      clear() {
        setItems([]);
      },
    };
  }, [items, toast]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
