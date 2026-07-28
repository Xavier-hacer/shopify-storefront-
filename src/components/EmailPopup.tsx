"use client";

import { useEffect, useState } from "react";
import { subscribeEmail } from "@/lib/shopify-client";

const STORAGE_KEY = "velunna_popup_dismissed";
const DISCOUNT_CODE = "WELCOME10";

export function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await subscribeEmail(email);
      setStatus("success");
      localStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 backdrop-blur-sm px-6">
      <div className="relative w-full max-w-sm rounded-2xl border border-line bg-ink-raised p-8 text-center">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 text-stone transition hover:text-porcelain"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {status === "success" ? (
          <>
            <p className="text-xs uppercase tracking-[0.3em] text-stone">You&apos;re in</p>
            <h3 className="mt-4 font-display text-2xl text-porcelain">
              Here&apos;s your code
            </h3>
            <p className="mt-4 rounded-full border border-ember/40 bg-ember/10 px-6 py-3 font-display text-lg tracking-widest text-ember-soft">
              {DISCOUNT_CODE}
            </p>
            <p className="mt-4 text-xs text-stone">
              10% off your first order. Applied at checkout.
            </p>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.3em] text-stone">Get 10% off</p>
            <h3 className="mt-4 font-display text-2xl leading-tight text-porcelain">
              10% off your first order.
            </h3>
            <p className="mt-3 text-sm text-stone">
              Join the list for early access and skincare tips.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="rounded-full border border-line bg-ink px-5 py-3 text-sm text-porcelain placeholder:text-stone/60 focus:border-ember focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-porcelain px-5 py-3 text-sm font-medium uppercase tracking-wide text-ink transition hover:bg-ember hover:text-porcelain disabled:opacity-50"
              >
                {status === "loading" ? "Submitting…" : "Get my code"}
              </button>
            </form>
            {error && <p className="mt-3 text-xs text-ember-soft">{error}</p>}
            <button
              type="button"
              onClick={dismiss}
              className="mt-4 text-xs uppercase tracking-widest text-stone underline decoration-line underline-offset-4 transition hover:text-porcelain"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
