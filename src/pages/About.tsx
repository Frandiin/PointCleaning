import { FaHandshake, FaAward, FaHistory, FaUsers } from "react-icons/fa";
import { createWhatsAppLink } from "../utils/whatsapp";

export function About() {
  const values = [
    {
      icon: FaHandshake,
      title: "Commitment",
      description:
        "Total dedication to customer satisfaction, ensuring high-quality services.",
    },
    {
      icon: FaAward,
      title: "Excellence",
      description:
        "Striving for perfection in every detail, using the best practices and products.",
    },
    {
      icon: FaHistory,
      title: "Experience",
      description:
        "Years of experience in the market, serving various types of customers and needs.",
    },
    {
      icon: FaUsers,
      title: "Qualified Team",
      description:
        "Trained and qualified professionals to offer the best service.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative text-white text-center py-20">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-h1 text-primary font-bold mb-8 text-shadow-lg">
            About Point Cleaning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforming environments and exceeding expectations with
            professional cleaning excellence
          </p>
        </div>
      </div>

      {/* Our History */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-h2 text-primary mb-6">Our History</h2>
            <p className="text-body mb-4">
              Point Cleaning was born from the vision of transforming the
              professional cleaning market, bringing innovation and excellence
              to every service provided.
            </p>
            <p className="text-body mb-4">
              We started as a small family-owned business and grew thanks to our
              dedication to quality and personalized service. Today, we are a
              reference in the industry, serving residential and commercial
              customers throughout the region.
            </p>
            <p className="text-body mb-4">
              Our mission is to provide cleaner, healthier, and more pleasant
              environments, contributing to the well-being of our customers and
              their families.
            </p>
            <a
              href={createWhatsAppLink(
                "Hi! I'm interested in learning more about Point Cleaning. I'd like to know more about your mission and values. Can you tell me more about how you work and what sets your services apart?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 mt-4"
            >
              Learn More
            </a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg"
              alt="Professional Cleaning Equipment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-h2 text-primary mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
              >
                <div className="text-primary text-5xl mb-4">
                  {<value.icon />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Numbers */}
        <div className="text-center mb-16">
          <h2 className="text-h2 text-primary mb-12">Our Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Satisfied Customers" },
              { number: "5000+", label: "Services Provided" },
              { number: "50+", label: "Qualified Professionals" },
              { number: "3", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-h3 text-primary font-bold mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-gray-50 rounded-lg mt-16">
        <h2 className="text-h2 text-primary mb-6">
          Ready to Transform Your Environment?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us and discover how we can help
        </p>
        <a
          href={createWhatsAppLink(
            "Hi! I'm looking for a professional cleaning company with experience and commitment. I'd like to schedule a technical visit for evaluation and detailed budgeting of services."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
}
