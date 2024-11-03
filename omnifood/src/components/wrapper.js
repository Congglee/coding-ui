import FeaturedSection from "@/components/featured-section/featured-section";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";
import HowSection from "@/components/how-section/how-section";
import MealSection from "@/components/meals-section/meals-section";
import PricingSection from "@/components/pricing-section/pricing-section";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";

export default function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <HowSection />
        <MealSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </>
  );
}
