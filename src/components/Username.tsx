import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Username: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <div className="flex flex-col ms-5">
      <p className="font-bold sm:text-2xl text-3xl mt-5 sm:mt-5">
        {user?.name}
      </p>
      <p className="font-normal sm:text-xl text-2xl text-light-gray font-light">
        {user?.login}
      </p>
    </div>
  );
};

export default Username;
