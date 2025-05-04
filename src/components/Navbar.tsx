import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";

const pages = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Feedback", path: "/feedback" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Logo */}
          <div className="hidden md:flex items-center">
            <MdCleaningServices className="text-[#1479bc] text-2xl mr-2" />
            <span
              className="text-[#1479bc] font-bold text-xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              Point Cleaning
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1479bc] p-2"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
            <MdCleaningServices className="text-[#1479bc] text-2xl mr-2" />
            <span
              className="text-[#1479bc] font-bold text-xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              Point Cleaning
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {pages.map((page) => (
              <button
                key={page.title}
                onClick={() => navigate(page.path)}
                className="text-[#1479bc] font-medium px-3 py-2 rounded-md hover:bg-[#1479bc]/10 transition-colors"
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {pages.map((page) => (
              <button
                key={page.title}
                onClick={() => {
                  navigate(page.path);
                  setMobileMenuOpen(false);
                }}
                className="text-[#1479bc] block w-full text-left px-3 py-2 rounded-md hover:bg-[#1479bc]/10 transition-colors"
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
