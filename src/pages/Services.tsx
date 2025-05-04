import { BsHouseDoor, BsTools, BsCheckCircle, BsShop } from "react-icons/bs";
import { FaRegBuilding, FaIndustry } from "react-icons/fa";
import { MdCleaningServices, MdApartment, MdFactory } from "react-icons/md";
import { createWhatsAppLink } from "../utils/whatsapp";

export function Services() {
  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Complete cleaning services for your home, keeping your living space clean and welcoming.",
      icon: <BsHouseDoor size={40} />,
      features: [
        "Deep cleaning of all rooms",
        "Bathroom and kitchen sanitization",
        "Window and glass cleaning",
        "Floor vacuuming and washing",
      ],
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for offices and commercial spaces.",
      icon: <BsShop size={40} />,
      features: [
        "Daily or scheduled cleaning",
        "Common areas maintenance",
        "Restroom sanitization",
        "Carpet and upholstery cleaning",
      ],
    },
    {
      title: "Industrial Cleaning",
      description:
        "Specialized services for industrial environments and warehouses.",
      icon: <MdFactory size={40} />,
      features: [
        "Production area cleaning",
        "Equipment sanitization",
        "Industrial floor cleaning",
        "Waste removal",
      ],
    },
    {
      title: "Post-Construction Cleaning",
      description: "Complete cleaning after construction or renovation.",
      icon: <BsTools size={40} />,
      features: [
        "Construction debris removal",
        "Finishing cleanup",
        "Fine dust removal",
        "Window and frame cleaning",
      ],
    },
    {
      title: "Warehouse Cleaning",
      description:
        "Industrial cleaning services for warehouses and large areas.",
      icon: <FaIndustry size={40} />,
      features: [
        "Industrial floor cleaning",
        "Stain removal",
        "Equipment cleaning",
        "Waste collection",
        "Complete sanitization",
      ],
    },
    {
      title: "Office Cleaning",
      description:
        "Professional maintenance and cleaning for corporate environments.",
      icon: <FaRegBuilding size={40} />,
      features: [
        "Workstation cleaning",
        "Break room sanitization",
        "Meeting room cleaning",
        "Daily maintenance",
        "Carpet cleaning",
      ],
    },
    {
      title: "Sofa cleaning",
      description: "Customized services for specific cleaning needs.",
      icon: <MdCleaningServices size={40} />,
      features: [
        "Sofa and armchair cleaning",
        "Stain removal",
        "Fabric and leather treatment",
        "Odor removal",
        "Protection treatment",
      ],
    },
    {
      title: "Condominium Cleaning",
      description:
        "Complete cleaning and maintenance services for residential and commercial condominiums.",
      icon: <MdApartment size={40} />,
      features: [
        "Common areas cleaning",
        "Garden and pool area maintenance",
        "Garage and parking lot cleaning",
        "Elevator and hall maintenance",
        "Waste collection and recycling areas",
        "24/7 emergency cleaning service",
      ],
    },
  ];

  return (
    <div className="mt-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-h1 text-primary font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional cleaning solutions for all environments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <BsCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <a
                    href={createWhatsAppLink(`Hello! I would like a quote for ${
                      service.title
                    }. I specifically need:
${service.features.join(", ")}. 
${service.description}
Can you help me?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-center"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-gray-50 rounded-lg">
          <h2 className="text-h2 text-primary mb-6">Need a Custom Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your specific needs
          </p>
          <a
            href={createWhatsAppLink(
              "Hello! I have a specific cleaning need and would like a custom quote. Can you help me find the best solution for my case?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
