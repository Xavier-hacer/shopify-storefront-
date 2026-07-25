const steps = [
  {
    n: "01",
    title: "Cleanse",
    desc: "Start with bare, dry skin. No serums needed underneath.",
  },
  {
    n: "02",
    title: "Wear",
    desc: "Strap in, choose your mode, and relax for 10 minutes. Eye-safe honeycomb shield included.",
  },
  {
    n: "03",
    title: "Glow",
    desc: "Cordless and rechargeable — use it nightly as part of your wind-down routine.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ink-raised">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">How It Works</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-porcelain sm:text-5xl">
          Three steps. Ten minutes.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-display text-5xl text-ember/60">{s.n}</p>
              <p className="mt-4 text-lg text-porcelain">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
