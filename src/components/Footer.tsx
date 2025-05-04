import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { createWhatsAppLink } from "../utils/whatsapp";

const footerServices = [
  {
    text: "Residential Cleaning",
    message:
      "Hello! I'm interested in residential cleaning services. Could you provide more information?",
  },
  {
    text: "Commercial Cleaning",
    message:
      "Hello! I need commercial cleaning services for my business. Could you send me a quote?",
  },
  {
    text: "Industrial Cleaning",
    message:
      "Hello! I need industrial cleaning services. Could you provide more information?",
  },
  {
    text: "Post-Construction Cleaning",
    message:
      "Hello! I need post-construction cleaning services. What are your rates?",
  },
  {
    text: "Warehouse Cleaning",
    message:
      "Hello! I'm looking for warehouse cleaning services. Could you provide details?",
  },
  {
    text: "Office Cleaning",
    message: "Hello! I need office cleaning services. What are your packages?",
  },
  {
    text: "Specialized Cleaning",
    message:
      "Hello! I'm interested in specialized cleaning services. Could you tell me more?",
  },
  {
    text: "Condominium Cleaning",
    message:
      "Hello! I'm interested in condominium cleaning services. Could you provide more information?",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1A2027] text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img
                src="/point.png"
                alt="Point Cleaning Logo"
                className="h-20 bg-transparent"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Professional cleaning services with excellence and quality.
              Transforming environments with dedication and attention to detail.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/point.cleaning?igsh=bzhxbnlmOTM1M2w5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4405F] transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href={createWhatsAppLink(
                  "Hello! I would like more information about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-bold mb-6">Contact</h6>
            <div className="flex flex-col gap-4">
              <p className="text-gray-400">San Diego, CA</p>
              <a
                href={createWhatsAppLink(
                  "Hello! I would like to speak with someone."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Phone: +1 (857) 263-1670
              </a>
              <a
                href="mailto:pointcleaning@outlook.com"
                className="text-gray-400"
              >
                Email: pointcleaning@outlook.com
              </a>
              <p className="text-gray-400">
                Hours: Mon-Fri: 8am-6pm
                <br />
                Sat: 8am-12pm
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-lg font-bold mb-6">Services</h6>
            <div className="flex flex-col gap-4">
              {footerServices.map((service) => (
                <a
                  key={service.text}
                  href={createWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {service.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>{new Date().getFullYear()} Point Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
