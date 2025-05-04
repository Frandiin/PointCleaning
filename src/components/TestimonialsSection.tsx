import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "../mock";

export function TestimonialsSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-[#1976D2] font-bold">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {testimonials.map((feedback, index) => (
            <div key={index} className="flex h-full">
              <TestimonialCard
                name={feedback.name}
                comment={feedback.comment}
                rating={feedback.rating}
                date={feedback.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
