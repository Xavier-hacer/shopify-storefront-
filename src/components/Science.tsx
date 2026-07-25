const wavelengths = [
  {
    name: "Red Light",
    range: "620–700nm",
    desc: "Targets the skin's surface layers — associated with a more even tone and a visibly firmer look over time.",
  },
  {
    name: "Near-Infrared",
    range: "780–850nm",
    desc: "Penetrates deeper than red light, reaching further into tissue where estheticians target fatigue and dullness.",
  },
  {
    name: "Blue Light",
    range: "~415nm",
    desc: "A shorter wavelength commonly used alongside red light in clinic protocols for clearer-looking skin.",
  },
];

export function Science() {
  return (
    <section id="science" className="mx-auto max-w-6xl px-6 py-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-stone">The Science</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-porcelain sm:text-5xl">
          The same light, without the med-spa chair.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone">
          Dermatologists and estheticians have used red and near-infrared
          light in clinics for years — sessions that typically run $100–$250
          each. Velunna brings the same wavelength ranges home, in a mask you
          wear for 10 minutes before bed.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
        {wavelengths.map((w) => (
          <div key={w.name} className="bg-ink p-8">
            <p className="font-display text-3xl text-ember-soft">{w.range}</p>
            <p className="mt-3 text-sm uppercase tracking-widest text-porcelain">{w.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone">{w.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-stone/70">
        Velunna Glow Mask is not a medical device and is not intended to
        diagnose, treat, cure, or prevent any disease. Individual results
        vary with consistent use.
      </p>
    </section>
  );
}
