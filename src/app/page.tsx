import { getFeaturedProduct } from "@/lib/shopify";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Science } from "@/components/Science";
import { HowItWorks } from "@/components/HowItWorks";
import { Buy } from "@/components/Buy";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { EmailPopup } from "@/components/EmailPopup";

export default async function Home() {
  const product = await getFeaturedProduct();

  return (
    <div className="flex flex-1 flex-col">
      <AnnouncementBar />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Science />
        <HowItWorks />
        {product && <Buy product={product} />}
        <Reviews />
      </main>
      <FAQ />
      <Footer />
      <EmailPopup />
    </div>
  );
}
