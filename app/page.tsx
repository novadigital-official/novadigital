"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProvenResults from "./components/ProvenResults";
import WhyNova from "./components/WhyNova";
import InteractiveSolutions from "./components/InteractiveSolutions";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileStickyCTA from "./components/MobileStickyCTA";
import LegalModal, { LegalTab } from "./components/LegalModal";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>("kvkk");

  const handleOpenLegal = (tab: LegalTab = "kvkk") => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden w-full max-w-full">
      {/* Fixed Ambient Aurora */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora-cone-1 -top-[10%] -left-[10%]" />
        <div className="aurora-cone-2 -bottom-[10%] -right-[10%]" />
      </div>

      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Proof metrics */}
      <ProvenResults />

      {/* 3. Neden NovaDigital? */}
      <WhyNova />

      {/* 4. Packages — fiyatlar erkenden gösterilir */}
      <Packages />

      {/* 5. Interactive Solutions */}
      <InteractiveSolutions />

      {/* 6. Portfolio — canlı demolar */}
      <Portfolio />

      {/* 7. Process */}
      <Process />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Contact */}
      <Contact onOpenLegal={handleOpenLegal} />

      <Footer onOpenLegal={handleOpenLegal} />
      <FloatingWhatsApp />
      <MobileStickyCTA />

      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setLegalTab}
      />

      <CookieBanner onOpenLegal={() => handleOpenLegal("cerez")} />
    </main>
  );
}
