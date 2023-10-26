import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Avatar: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <>
      {user ? (
        <img
          src={user.avatar_url}
          width="260"
          height="260"
          className="avatar avatar-user w-28 sm:w-full light-gray-border h-auto"
          alt="User Avatar"
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Avatar;
