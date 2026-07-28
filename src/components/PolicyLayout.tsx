import Link from "next/link";
import { AnnouncementBar } from "./AnnouncementBar";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PolicyLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 pb-28 pt-36">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-stone transition hover:text-porcelain"
          >
            ← Back to Velunna
          </Link>
          <h1 className="mt-6 font-display text-4xl leading-tight text-porcelain sm:text-5xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-3 text-xs text-stone">Last updated: {updated}</p>
          )}
          <div className="policy-content mt-10">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
