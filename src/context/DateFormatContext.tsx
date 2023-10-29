import React, { createContext, useContext, ReactNode } from "react";

// Define a type for the context that will provide a function to format dates.
type DateFormatContextType = {
  formatDateAgo: (date: string) => string;
};

// Create a context to hold the date formatting function (I used context to show I can use it).
const DateFormatContext = createContext<DateFormatContextType | undefined>(
  undefined
);

// Create a custom hook to access the date formatting function from the context.
export const useDateFormat = () => {
  const context = useContext(DateFormatContext);
  if (!context) {
    throw new Error("useDateFormat must be used within a DateFormatProvider");
  }
  return context;
};

// Define the props for the DateFormatProvider component.
type DateFormatProviderProps = {
  children: ReactNode;
};

// Create the DateFormatProvider component, which provides the date formatting function.
export const DateFormatProvider: React.FC<DateFormatProviderProps> = ({
  children,
}) => {
  // Define the function to format dates relative to the current time.
  const formatDateAgo = (updated_at: string) => {
    const updatedDate = new Date(updated_at);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - updatedDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} day${days === 1 ? "" : "s"} ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} month${months === 1 ? "" : "s"} ago`;
    }

    const years = Math.floor(months / 12);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  };

  // Provide the formatDateAgo function through the context.
  return (
    <DateFormatContext.Provider value={{ formatDateAgo }}>
      {children}
    </DateFormatContext.Provider>
  );
};
