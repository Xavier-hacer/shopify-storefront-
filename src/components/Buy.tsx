import { MaskGlow } from "./MaskGlow";
import { AddToCartButton } from "./AddToCartButton";
import type { Product } from "@/lib/types";

const included = [
  "1x Lumora Glow Mask",
  "1x USB-C charging cable",
  "1x Quick-start guide",
];

const specs = [
  "7 light modes — red, blue & near-infrared (620–850nm)",
  "Cordless, rechargeable battery",
  "Eye-safe honeycomb light-diffusing shield",
  "10-minute auto-timer per session",
];

export function Buy({ product }: { product: Product }) {
  const variant = product.variants[0];
  const price = variant
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: variant.price.currencyCode,
      }).format(Number(variant.price.amount))
    : null;

  return (
    <section id="buy" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex items-center justify-center">
          <MaskGlow className="aspect-square w-full max-w-sm" animated={false} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-stone">
            Lumora Glow Mask™
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-porcelain sm:text-5xl">
            Your glow, on your schedule.
          </h2>

          {price && (
            <p className="mt-6 font-display text-3xl text-ember-soft">{price}</p>
          )}

          <ul className="mt-8 space-y-3">
            {specs.map((s) => (
              <li key={s} className="flex gap-3 text-sm leading-relaxed text-stone">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ember" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 max-w-xs">
            {variant ? (
              <AddToCartButton
                variantId={variant.id}
                available={variant.availableForSale}
                label={`Add to Cart — ${price}`}
              />
            ) : (
              <p className="text-sm text-stone">Currently unavailable.</p>
            )}
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <p className="text-xs uppercase tracking-widest text-stone">In the box</p>
            <ul className="mt-3 space-y-1 text-sm text-stone">
              {included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
