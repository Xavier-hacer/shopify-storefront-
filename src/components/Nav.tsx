export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-lg tracking-[0.2em] text-porcelain">
          VELUNNA
        </span>
        <a
          href="#buy"
          className="rounded-full border border-line px-5 py-2 text-xs uppercase tracking-widest text-porcelain transition hover:border-ember hover:text-ember-soft"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}
