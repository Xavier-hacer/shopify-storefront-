import { getFeaturedProduct } from "@/lib/shopify";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Science } from "@/components/Science";
import { HowItWorks } from "@/components/HowItWorks";
import { Buy } from "@/components/Buy";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default async function Home() {
  const product = await getFeaturedProduct();

  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero product={product} />
        <TrustBar />
        <Science />
        <HowItWorks />
        {product && <Buy product={product} />}
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}
