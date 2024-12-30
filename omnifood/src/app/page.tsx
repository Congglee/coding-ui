import CTA from "@/app/_components/cta";
import Featured from "@/app/_components/featured";
import Hero from "@/app/_components/hero";
import How from "@/app/_components/how";
import Meals from "@/app/_components/meals";
import Pricing from "@/app/_components/pricing";
import Testimonials from "@/app/_components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <How />
      <Meals />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  );
}
