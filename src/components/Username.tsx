import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Username: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.userInfo);

  return (
    <div className="flex flex-col ms-5 sm:ms-0">
      {/* Display the user's full name. */}
      <p className="font-bold text-3xl mt-5">{user?.name}</p>
      {/* Display the user's username (login). */}
      <p className="font-normal sm:text-xl text-2xl text-light-gray font-light">
        {user?.login}
      </p>
    </div>
  );
};

export default Username;
