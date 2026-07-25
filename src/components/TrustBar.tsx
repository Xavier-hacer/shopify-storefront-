const stats = [
  { value: "10 min", label: "per night" },
  { value: "7", label: "light modes" },
  { value: "620–850nm", label: "red + NIR range" },
  { value: "Cordless", label: "rechargeable" },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-ink-raised">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl text-porcelain sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-stone">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
