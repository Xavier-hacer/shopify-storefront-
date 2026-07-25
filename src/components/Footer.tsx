export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="font-display text-sm tracking-[0.2em] text-porcelain">
          VELUNNA
        </span>
        <p className="text-xs text-stone">
          © {new Date().getFullYear()} Velunna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
