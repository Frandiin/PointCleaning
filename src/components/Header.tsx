import { Link as RouterLink } from "react-router-dom";
import type { Dispatch, SetStateAction, FC } from "react";
import { createWhatsAppLink } from "../utils/whatsapp";
import logo from "../assets/point_logo.svg";

interface HeaderProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ setShow, show }) => {
  const navigationLinks = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Services", path: "/Services" },
  ];

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink to="/">
              <img src={logo} alt="Point Cleaning Logo" className="h-16" />
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navigationLinks.map((link) => (
                <RouterLink
                  key={link.text}
                  to={link.path}
                  className="text-gray-600 hover:text-[#1479bc] transition-colors cursor-pointer font-medium"
                >
                  {link.text}
                </RouterLink>
              ))}
            </nav>
            <a
              href={createWhatsAppLink(
                "Hello! I saw your website and am interested in contracting the  service I would like to know more about prices and availability."
              )}
              className="bg-[#1479bc] hover:bg-[#0f5c8f] text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setShow(!show)}
              className="text-[#1479bc] p-2"
            >
              {show ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setShow(false)}
            className="mb-4 text-gray-600 hover:text-[#1479bc]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col space-y-2">
            {navigationLinks.map((link) => (
              <RouterLink
                key={link.text}
                to={link.path}
                onClick={() => setShow(false)}
                className="text-gray-600 hover:text-[#1479bc] p-2 transition-colors"
              >
                {link.text}
              </RouterLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
