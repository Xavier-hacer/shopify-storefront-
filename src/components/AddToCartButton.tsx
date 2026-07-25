"use client";

import { useState } from "react";
import { createCartAndGetCheckoutUrl } from "@/lib/shopify-client";

export function AddToCartButton({
  variantId,
  available,
  className,
  label = "Add to cart",
}: {
  variantId: string;
  available: boolean;
  className?: string;
  label?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    setLoading(true);
    try {
      const url = await createCartAndGetCheckoutUrl(variantId, 1);
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={!available || loading}
        className={
          className ??
          "w-full rounded-full bg-porcelain text-ink px-8 py-4 text-sm tracking-wide uppercase font-medium transition hover:bg-ember hover:text-porcelain disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        {!available ? "Sold out" : loading ? "Redirecting…" : label}
      </button>
      {error && <p className="mt-3 text-sm text-ember-soft">{error}</p>}
    </div>
  );
}
