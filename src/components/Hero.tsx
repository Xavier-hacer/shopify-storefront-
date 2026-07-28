import { MaskGlow } from "./MaskGlow";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 45%, rgba(255,90,60,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-8">
        <div className="order-2 md:order-1">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-stone">
            Red &amp; Near-Infrared Light Therapy
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-porcelain sm:text-6xl lg:text-7xl">
            The glow starts
            <br />
            in a dark room.
          </h1>
          <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-stone">
            Med-spa red light therapy, brought home. 10 minutes a night with
            the Velunna Glow Mask for visibly firmer, calmer, more radiant
            skin.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#buy"
              className="rounded-full bg-porcelain px-8 py-4 text-sm font-medium uppercase tracking-wide text-ink transition hover:bg-ember hover:text-porcelain"
            >
              Shop the Mask
            </a>
            <a
              href="#science"
              className="text-sm uppercase tracking-wide text-stone underline decoration-line underline-offset-8 transition hover:text-porcelain"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
          <MaskGlow className="aspect-[4/5] w-full max-w-sm" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-line" />
      </div>
    </section>
  );
}
