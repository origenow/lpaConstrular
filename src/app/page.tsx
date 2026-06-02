import { Header } from "@/components/sections/Header";
import { PromoCarousel } from "@/components/sections/PromoCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { CategoriasSection } from "@/components/sections/CategoriasSection";
import { CategoriasStoriesSection } from "@/components/sections/CategoriasStoriesSection";
import { StoreFinderSection } from "@/components/sections/StoreFinderSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <PromoCarousel />
      <DifferentiatorsSection />
      <HeroSection />
      <StoreFinderSection />
      <SocialProofSection />
      <CategoriasSection />
      <CtaSection />
      <CategoriasStoriesSection />
      <Footer />
    </main>

  );
}
