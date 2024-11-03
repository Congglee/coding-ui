import FeaturedSection from "@/components/featured-section/featured-section";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";

export default function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
    </>
  );
}
