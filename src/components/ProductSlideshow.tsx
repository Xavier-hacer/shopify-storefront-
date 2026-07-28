"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/types";

export function ProductSlideshow({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] bg-ember/10" aria-hidden />
    );
  }

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div className="w-full max-w-sm">
      <div className="relative aspect-square overflow-hidden rounded-[2rem]">
        {images.map((img, i) => (
          <Image
            key={img.url}
            src={img.url}
            alt={img.altText ?? "Velunna Glow Mask"}
            fill
            sizes="(min-width: 768px) 24rem, 100vw"
            className={`object-cover transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-porcelain backdrop-blur transition hover:bg-ink/80"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-porcelain backdrop-blur transition hover:bg-ink/80"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.url}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-ember" : "w-1.5 bg-line hover:bg-stone"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
