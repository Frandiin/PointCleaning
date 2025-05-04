import { createContext, useContext, useState, ReactNode } from "react";
import { formatDate } from "../utils/dateUtils";

interface Feedback {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (feedback: Omit<Feedback, "date">) => void;
}

const mockFeedbacks: Feedback[] = [
  {
    name: "Maria Silva",
    comment: "Excellent service! The team was very professional and attentive.",
    rating: 5,
    date: "March 1, 2024",
  },
  {
    name: "João Santos",
    comment: "Impeccable cleaning and fair price. I recommend!",
    rating: 5,
    date: "March 5, 2024",
  },
  {
    name: "Ana Oliveira",
    comment: "Very satisfied with the result. I will hire again!",
    rating: 4,
    date: "March 10, 2024",
  },
];

const FeedbackContext = createContext<FeedbackContextType | undefined>(
  undefined
);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(mockFeedbacks);

  const addFeedback = (feedback: Omit<Feedback, "date">) => {
    const newFeedback = {
      ...feedback,
      date: formatDate(new Date(), "custom"),
    };
    setFeedbacks((prev) => [newFeedback, ...prev].slice(0, 3));
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}
