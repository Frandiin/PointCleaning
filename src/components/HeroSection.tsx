import { createWhatsAppLink } from "../utils/whatsapp";

export function HeroSection() {
  return (
    <div className="relative py-10 md:py-15 text-white overflow-hidden">
      <img
        src="/home.png"
        alt="Professional Cleaning Services"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-2]"
        style={{
          imageRendering: "crisp-edges",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitFontSmoothing: "antialiased",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[-1]" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Professional Cleaning for Your Space
          </h1>

          <h2 className="text-xl md:text-2xl max-w-3xl mb-8 opacity-90">
            Transform your environment with our specialized cleaning team.
            Quality and professionalism in every detail.
          </h2>

          <a
            href={createWhatsAppLink(
              "Hello! I saw your website and would like a quote for cleaning services."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-8 text-xl rounded-lg bg-[#2196F3] hover:bg-[#1976D2] text-white transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
