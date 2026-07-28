import Link from "next/link";

const policyLinks = [
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/legal-notice", label: "Legal Notice" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:items-stretch sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <span className="font-display text-sm tracking-[0.2em] text-porcelain">
            VELUNNA
          </span>
          <p className="text-xs text-stone">
            © {new Date().getFullYear()} Velunna. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-6 sm:justify-start">
          {policyLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-stone transition hover:text-porcelain"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
