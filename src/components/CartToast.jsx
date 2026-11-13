import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartToast() {
  const { toast, dismissToast } = useCart();
  if (!toast) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[70] w-[min(440px,calc(100%-1.5rem))] -translate-x-1/2">
      <div className="rise flex items-center justify-between gap-4 rounded-2xl bg-[#1d1d1f] px-4 py-3 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
        <div>
          <p className="text-sm font-medium">Added to cart</p>
          <p className="text-xs text-white/65">
            {toast.name}
            {toast.detail ? ` · ${toast.detail}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/cart" onClick={dismissToast} className="text-sm font-medium text-[#2997ff]">
            View
          </Link>
          <button type="button" onClick={dismissToast} className="text-xs text-white/50 hover:text-white" aria-label="Dismiss">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
