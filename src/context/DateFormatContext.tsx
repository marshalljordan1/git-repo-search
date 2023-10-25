import React, { createContext, useContext, ReactNode } from "react";

type DateFormatContextType = {
  formatDateAgo: (date: string) => string;
};

const DateFormatContext = createContext<DateFormatContextType | undefined>(
  undefined
);

export const useDateFormat = () => {
  const context = useContext(DateFormatContext);
  if (!context) {
    throw new Error("useDateFormat must be used within a DateFormatProvider");
  }
  return context;
};

type DateFormatProviderProps = {
  children: ReactNode;
};

export const DateFormatProvider: React.FC<DateFormatProviderProps> = ({
  children,
}) => {
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

  return (
    <DateFormatContext.Provider value={{ formatDateAgo }}>
      {children}
    </DateFormatContext.Provider>
  );
};
