import { BsBuilding, BsHouseDoor, BsTools } from "react-icons/bs";
import {
  FaWarehouse,
  FaRegBuilding,
  FaSprayCan,
  FaBroom,
  FaHandSparkles,
} from "react-icons/fa";
import { MdCleaningServices, MdOutlineCleanHands } from "react-icons/md";
export const services = [
  {
    title: "Residential Cleaning",
    description:
      "Keep your home spotless with our professional cleaning services.",
    icon: BsHouseDoor,
  },
  {
    title: "Commercial Cleaning",
    description: "Clean and organized environment for your business to thrive.",
    icon: BsBuilding,
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Get your construction ready for use with our specialized cleaning.",
    icon: BsTools,
  },
  {
    title: "Warehouse Cleaning",
    description: "Industrial cleaning services for warehouses and large areas.",
    icon: FaWarehouse,
  },
  {
    title: "Office Cleaning",
    description:
      "Professional maintenance and cleaning for corporate environments.",
    icon: FaRegBuilding,
  },
  {
    title: "Sofa Cleaning",
    description: "Sofa cleaning services for specific needs.",
    icon: MdCleaningServices,
  },
];

export const benefits = [
  {
    title: "Qualified Professionals",
    description: "Trained and experienced team in all areas of cleaning",
    icon: MdOutlineCleanHands,
  },
  {
    title: "Eco-Friendly Products",
    description: "We use products that respect the environment",
    icon: FaSprayCan,
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art technology for superior results",
    icon: FaBroom,
  },
  {
    title: "Complete Sanitization",
    description: "Detailed cleaning and disinfection process",
    icon: FaHandSparkles,
  },
];

export const testimonials = [
  {
    name: "Maria Silva",
    comment:
      "Exceptional service! My home has never been cleaner and more organized.",
    rating: 4,
    date: "2023-03-12",
  },
  {
    name: "João Santos",
    comment: "Great service and professionalism. I recommend for businesses.",
    rating: 4,
    date: "2024-25-06",
  },
  {
    name: "Ana Oliveira",
    comment:
      "Excellent post-construction cleaning service. Impeccable results!",
    rating: 5,
    date: "2025-23-01",
  },
];
