"use client";

import { useState } from "react";
import { createCartAndGetCheckoutUrl } from "@/lib/shopify-client";

export function QuantityBuyBox({
  variantId,
  available,
  unitAmount,
  currencyCode,
}: {
  variantId: string;
  available: boolean;
  unitAmount: string;
  currencyCode: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const total = formatter.format(Number(unitAmount) * quantity);

  function decrement() {
    setQuantity((q) => Math.max(1, q - 1));
  }

  function increment() {
    setQuantity((q) => Math.min(10, q + 1));
  }

  async function handleBuyNow() {
    setError(null);
    setLoading(true);
    try {
      const url = await createCartAndGetCheckoutUrl(variantId, quantity);
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-full border border-line">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-lg text-porcelain transition hover:text-ember-soft disabled:opacity-30"
          >
            −
          </button>
          <span className="w-8 text-center text-sm text-porcelain">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-lg text-porcelain transition hover:text-ember-soft disabled:opacity-30"
          >
            +
          </button>
        </div>

        <button
          onClick={handleBuyNow}
          disabled={!available || loading}
          className="flex-1 rounded-full bg-porcelain px-8 py-4 text-sm font-medium uppercase tracking-wide text-ink transition hover:bg-ember hover:text-porcelain disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {!available ? "Sold out" : loading ? "Redirecting…" : `Buy Now — ${total}`}
        </button>
      </div>
      {error && <p className="mt-3 text-sm text-ember-soft">{error}</p>}
    </div>
  );
}
