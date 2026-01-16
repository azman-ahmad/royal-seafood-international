import { HeroSlider } from "@/components/HeroSlider";
import PremiumProducts from "@/components/view/PremiumProducts";
import AboutSection from "@/components/view/AboutSection";
import ServiceSection from "@/components/view/ServiceSection";
export default function Home() {
  return (
    <div>
      <HeroSlider />

      <div className="mx-auto mt-9 flex max-w-380 flex-col gap-30 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <PremiumProducts />
        <AboutSection />
        <ServiceSection />
      </div>
    </div>
  );
}
