export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">Reviews</p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-porcelain sm:text-4xl">
          Be the first to review the Glow Mask.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-stone">
          We&apos;re early — no reviews yet. Try it for 10 minutes a night and
          tell us what you notice.
        </p>
        <a
          href="#buy"
          className="mt-8 inline-block rounded-full border border-line px-6 py-3 text-xs uppercase tracking-widest text-porcelain transition hover:border-ember hover:text-ember-soft"
        >
          Shop the Mask
        </a>
      </div>
    </section>
  );
}
