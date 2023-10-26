import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Username: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <div className="flex flex-col ms-5 sm:ms-0">
      <p className="font-bold text-3xl mt-5">{user?.name}</p>
      <p className="font-normal sm:text-xl text-2xl text-light-gray font-light">
        {user?.login}
      </p>
    </div>
  );
};

export default Username;
