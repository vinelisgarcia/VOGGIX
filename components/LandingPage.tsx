"use client";

import { useState } from "react";
import { DemoModal } from "@/components/DemoModal";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSection } from "@/components/ProblemSection";
import { StudioSection } from "@/components/StudioSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { VerticalsSection } from "@/components/VerticalsSection";

export function LandingPage() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Header onDemoClick={() => setIsDemoOpen(true)} />
      <main>
        <Hero onDemoClick={() => setIsDemoOpen(true)} />
        <ProblemSection />
        <VerticalsSection onDemoClick={() => setIsDemoOpen(true)} />
        <FeaturesSection />
        <HowItWorks />
        <StudioSection onDemoClick={() => setIsDemoOpen(true)} />
        <PricingSection onDemoClick={() => setIsDemoOpen(true)} />
        <UseCasesSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA onDemoClick={() => setIsDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}
