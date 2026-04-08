import Header from './components/header';
import HeroSection from './components/hero-section';
import ProblemSection from './components/problem-section';
import SolutionSection from './components/solution-section';
import MethodologySection from './components/methodology-section';
import TechSection from './components/tech-section';
import TestimonialsSection from './components/testimonials-section';
import PricingSection from './components/pricing-section';
import GuaranteeSection from './components/guarantee-section';
import BriefingFormSection from './components/briefing-form-section';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsapp-button';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <TechSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <BriefingFormSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
