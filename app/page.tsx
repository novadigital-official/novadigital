"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProvenResults from "./components/ProvenResults";
import SectionDivider from "./components/SectionDivider";
import Portfolio from "./components/Portfolio";
import InteractiveSolutions from "./components/InteractiveSolutions";
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
      {/* Fixed Ambient 3D Aurora Cones */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 w-full max-w-full">
        <div className="aurora-cone-1 -top-[10%] -left-[10%]" />
        <div className="aurora-cone-2 -bottom-[10%] -right-[10%]" />
      </div>

      <Navbar />
      <Hero />
      <ProvenResults />

      <SectionDivider />
      <Portfolio />

      <SectionDivider />
      <InteractiveSolutions />

      <SectionDivider />
      <Packages />

      <SectionDivider />
      <Process />

      <SectionDivider />
      <FAQ />

      <SectionDivider />
      <Contact onOpenLegal={handleOpenLegal} />

      <Footer onOpenLegal={handleOpenLegal} />
      <FloatingWhatsApp />
      <MobileStickyCTA />

      {/* Global Legal & KVKK Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setLegalTab}
      />

      {/* Lightweight Cookie Consent Toast */}
      <CookieBanner onOpenLegal={() => handleOpenLegal("cerez")} />
    </main>
  );
}
