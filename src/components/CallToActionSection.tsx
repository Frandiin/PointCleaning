import { createWhatsAppLink } from "../utils/whatsapp";

export function CallToActionSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="bg-[#1976D2] text-white text-center py-16 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl mb-6">
          Ready to Transform Your Space?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Contact us now for a free assessment of your space
        </p>
        <a
          href={createWhatsAppLink(
            "Hello! I saw your website and would like a quote for cleaning services."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1976D2] hover:bg-gray-100 px-8 py-4  transition-colors inline-block"
        >
          Schedule a Visit
        </a>
      </div>

      <div className="h-[400px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.936811463496!2d-117.2085869!3d32.7862269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deaa9d0a2551b1%3A0x27d2a812968e1eb3!2s2311%20Morena%20Blvd%2C%20San%20Diego%2C%20CA%2092110!5e0!3m2!1sen!2sus!4v1706927420105!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
