import CustomerSection from "@/components/customer-section/customer-section";
import FeatureSection from "@/components/feature-section/feature-section";
import HeroSection from "@/components/hero-section/hero-section";
import IntroSection from "@/components/intro-section/intro-section";
import PartnerSection from "@/components/partner-section/partner-section";
import PlanSection from "@/components/plan-section/plan-section";
import SubscribeSection from "@/components/subscribe-section/subscribe-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeatureSection />
      <PlanSection />
      <PartnerSection />
      <CustomerSection />
      <SubscribeSection />
    </>
  );
}
