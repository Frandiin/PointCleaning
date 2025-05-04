import { useNavigate } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full px-4">
        <div className="text-center">
          <MdErrorOutline className="text-[#1479bc] text-[100px] mx-auto mb-8" />
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl mb-4">
            404
          </h1>
          <h2 className="text-gray-700 text-2xl md:text-3xl mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#1479bc] hover:bg-[#0f5c8f] text-white px-8 py-3 rounded-md text-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
