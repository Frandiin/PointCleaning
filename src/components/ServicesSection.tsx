import { createWhatsAppLink } from "../utils/whatsapp";
import { services } from "../mock";

export function ServicesSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1976D2]">
          Our Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center mb-4 text-[#1976D2]">
                    {<service.icon size={24} />}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a
                    href={createWhatsAppLink(
                      "Hello! I saw your website and am interested in contracting the " +
                        service.title +
                        " service. " +
                        service.description +
                        " I would like to know more about prices and availability."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 text-center bg-[#1976D2] hover:bg-[#1565C0] text-white rounded-md transition-colors"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
