import { useState } from "react";
import { useFeedback } from "../context/FeedbackContext";

export function FeedbackForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    comment: "",
    rating: "",
  });
  const { addFeedback } = useFeedback();

  const validateForm = () => {
    const newErrors = {
      name: "",
      comment: "",
      rating: "",
    };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!comment.trim()) {
      newErrors.comment = "Feedback is required";
      isValid = false;
    }

    if (rating === 0) {
      newErrors.rating = "Please select a rating";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      addFeedback({ name, comment, rating });
      setName("");
      setComment("");
      setRating(0);
      setOpenSnackbar(true);
      setErrors({ name: "", comment: "", rating: "" });
    }
  };

  const handleRatingClick = (newRating: number) => {
    setRating(newRating);
    setErrors({ ...errors, rating: "" });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8 rounded-lg shadow-lg bg-white"
      >
        <h2 className="text-3xl text-center text-[#1976D2] font-bold mb-4">
          Leave Your Feedback
        </h2>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors({ ...errors, name: "" });
            }}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-transparent`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Your Feedback
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setErrors({ ...errors, comment: "" });
            }}
            rows={4}
            className={`w-full px-4 py-2 border ${
              errors.comment ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-[#1976D2] focus:border-transparent`}
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mt-1">{errors.comment}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Rating: </span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleRatingClick(i + 1)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#1976D2] hover:bg-[#1565C0] text-white py-3 px-6 rounded-md text-lg shadow-md transition-colors"
        >
          Submit Feedback
        </button>

        {openSnackbar && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
            Thank you for your feedback!
          </div>
        )}
      </form>
    </div>
  );
}
