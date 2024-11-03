import Header from "@/components/header/header";
import HeroSection from "@/components/hero-section/hero-section";
import FeaturedSection from "@/components/featured-section/featured-section";
import HowSection from "@/components/how-section/how-section";
import MealSection from "@/components/meals-section/meals-section";
import TestimonialsSection from "@/components/testimonials-section/testimonials-section";
import PricingSection from "@/components/pricing-section/pricing-section";
import CTASection from "@/components/cta-section/cta-section";
import Footer from "@/components/footer/footer";

export default function Home() {
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
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
