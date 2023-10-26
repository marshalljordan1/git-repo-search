import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Avatar: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <div>
      {user ? (
        <img
          src={user.avatar_url}
          width="260"
          height="260"
          className="avatar avatar-user w-screen light-gray-border z-10 h-auto"
          alt="User Avatar"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Avatar;
