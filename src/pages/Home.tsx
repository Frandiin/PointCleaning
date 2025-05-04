import { Box } from "@mui/material";
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
      <Box sx={{ minHeight: "100vh" }}>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <MethodologySection />
        <TestimonialsSection />
        <Box sx={{ py: 8 }}>
          <FeedbackForm />
        </Box>
        <Branch />
        <CallToActionSection />
      </Box>
    </FeedbackProvider>
  );
}
