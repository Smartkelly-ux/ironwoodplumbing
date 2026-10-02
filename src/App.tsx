import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundBand } from './components/BackgroundBand';
import { LongCurvedHolder } from './components/LongCurvedHolder';
import { Industries } from './components/Industries';
import { HotWaterFeature } from './components/HotWaterFeature';
import { Services } from './components/Services';
import { SystemContainerScroll } from './components/SystemContainerScroll';
import { CameraInspection } from './components/CameraInspection';
import { ProofSection } from './components/ProofSection';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { EmergencySection } from './components/EmergencySection';
import { FieldWorkCarousel } from './components/FieldWorkCarousel';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#080808] selection:bg-[#146EF5] selection:text-white flex flex-col">
      {/* 1. NAVIGATION */}
      <Navbar onOpenCallback={() => setIsCallbackOpen(true)} />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* 2. HERO */}
        <Hero onOpenCallback={() => setIsCallbackOpen(true)} />

        {/* 3. BACKGROUND IMAGE BAND */}
        <BackgroundBand />

        {/* 4. LONG CURVED IMAGE HOLDER */}
        <LongCurvedHolder />

        {/* 5. INDUSTRIES */}
        <Industries />

        {/* 6. HOT WATER FEATURE */}
        <HotWaterFeature />

        {/* 7. SERVICES */}
        <Services />

        {/* 8. CONTAINER SCROLL — THE SYSTEM */}
        <SystemContainerScroll />

        {/* 9. CAMERA INSPECTION */}
        <CameraInspection />

        {/* 10. PROOF / CAPABILITY */}
        <ProofSection />

        {/* 10.5. MOVING ROW CAROUSEL FOR REVIEWS */}
        <ReviewsMarquee />

        {/* 11. EMERGENCY BAND */}
        <EmergencySection />

        {/* 12. FIELD WORK CAROUSEL */}
        <FieldWorkCarousel />

        {/* 13. FINAL CTA */}
        <FinalCta onOpenCallback={() => setIsCallbackOpen(true)} />
      </main>

      {/* 14. FOOTER */}
      <Footer />

      {/* Interactive Callback Modal */}
      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
      />

      {/* Subtle Back to Top Floating Action Button */}
      <BackToTop />
    </div>
  );
}
