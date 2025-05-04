import { BsCheckCircle } from "react-icons/bs";
import { createWhatsAppLink } from "../utils/whatsapp";

export function MethodologySection() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-[#1976D2]">
              Our Cleaning Methodology
            </h3>
            <ul className="space-y-4">
              {[
                "Detailed environment assessment",
                "Customized cleaning plan",
                "Specific products for each surface",
                "Professional equipment",
                "Specialized and trained team",
                "Quality supervision",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <BsCheckCircle className="text-[#1976D2] mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={createWhatsAppLink(
                "Hello! I need professional cleaning services. I would like to schedule a visit for assessment and detailed quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-[#1976D2] hover:bg-[#1565C0] text-white px-8 py-3 rounded-md transition-colors"
            >
              Request a Quote Now
            </a>
          </div>
          <div>
            <img
              src="/src/assets/image2.png"
              alt="Cleaning Methodology"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
