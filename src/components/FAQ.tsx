const faqs = [
  {
    q: "Is it safe for my eyes?",
    a: "Yes. The mask uses a honeycomb light-diffusing shield over the eye area, designed to block direct LED exposure while still letting you see.",
  },
  {
    q: "How often should I use it?",
    a: "Most people use it nightly for 10 minutes as part of a wind-down routine. Each session ends automatically via the built-in timer.",
  },
  {
    q: "Is this a medical device?",
    a: "No — Velunna Glow Mask is not a medical device and isn't intended to diagnose, treat, cure, or prevent any disease. It's a light-therapy wellness tool, and individual results vary with consistent use.",
  },
  {
    q: "Does it need to be plugged in during use?",
    a: "No. It's cordless and rechargeable via the included USB-C cable, so you can move freely while wearing it.",
  },
  {
    q: "Is it waterproof?",
    a: "Yes — the mask carries an IPX7 water-resistance rating, so it can handle splashes and light moisture as part of your skincare routine.",
  },
  {
    q: "What's covered if something goes wrong with my order?",
    a: "Order and shipping details are confirmed at checkout, and you can reach out any time with questions about your specific order.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <p className="text-xs uppercase tracking-[0.3em] text-stone">FAQ</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-porcelain sm:text-5xl">
        Good to know.
      </h2>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-porcelain">
              <span className="pr-8 text-base">{f.q}</span>
              <span className="shrink-0 text-xl text-stone transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-stone">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
