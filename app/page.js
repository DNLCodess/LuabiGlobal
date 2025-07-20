import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CTASection from "@/components/common/CTASection";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustSection from "@/components/sections/TrustSection";
import QASection from "@/components/sections/TrustSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans bg-white text-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />

      <TestimonialsSection />
      <QASection />
      <CTASection />
      <Footer />
    </main>
  );
}
