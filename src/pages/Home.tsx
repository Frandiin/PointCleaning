import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { MethodologySection } from "../components/MethodologySection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FeedbackForm } from "../components/FeedbackForm";
import { CallToActionSection } from "../components/CallToActionSection";
import { FeedbackProvider } from "../context/FeedbackContext";
import Branch from "../components/Branch";

export function Home() {
  return (
    <FeedbackProvider>
      <div className="100vh">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <MethodologySection />
        <TestimonialsSection />
        <div className="p-8">
          <FeedbackForm />
        </div>
        <Branch />
        <CallToActionSection />
      </div>
    </FeedbackProvider>
  );
}
