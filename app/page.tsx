"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StagesSection from "@/components/StagesSection";
import ROICalculatorModal from "@/components/ROICalculatorModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const [isROIOpen, setIsROIOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <HeroSection onOpenROI={() => setIsROIOpen(true)} />
      <FeaturesSection />
      <StagesSection />
      <HowItWorksSection />
      <ROICalculatorModal isOpen={isROIOpen} onClose={() => setIsROIOpen(false)} language={language} />
    </main>
  );
}
