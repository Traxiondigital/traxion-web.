import Header from './components/header';
import HeroSection from './components/hero-section';
import ProblemSection from './components/problem-section';
import LeadMagnetSection from './components/briefing-form-section'; // Renamed from BriefingFormSection
import SolutionSection from './components/solution-section';
import GrandSlamOfferSection from './components/grand-slam-offer-section';
import MethodologySection from './components/methodology-section';
import RoiSimulationSection from './components/roi-simulation-section';
import TestimonialsSection from './components/testimonials-section';
import TechSection from './components/tech-section';
import GuaranteeSection from './components/guarantee-section';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsapp-button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* 1. Hero - Promesa Principal */}
      <HeroSection />
      
      {/* 2. Problema - Identificación de Dolor */}
      <ProblemSection />
      
      {/* 3. Lead Magnet - Diagnóstico Express */}
      <LeadMagnetSection />
      
      {/* 4. Solución - Sistema */}
      <SolutionSection />
      
      {/* 5. Oferta Grand Slam - Propuesta Irresistible */}
      <GrandSlamOfferSection />
      
      {/* 6. Cómo Funciona - Metodología Simplificada */}
      <MethodologySection />
      
      {/* 7. ROI - Simulación de Recuperación */}
      <RoiSimulationSection />
      
      {/* 8. Prueba Social - Testimonios y Casos */}
      <TestimonialsSection />
      
      {/* 9. Tecnología - Herramientas */}
      <TechSection />
      
      {/* 10. Garantía - Bajo Riesgo */}
      <GuaranteeSection />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
