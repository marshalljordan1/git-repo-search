import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FollowButton from "./FollowButton";

const UserInfo: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <div className="flex flex-col w-full md:w-64 lg:w-72 xl:w-96">
      <div className="flex flex-col gap-4">
        <p className="text-base sm:text-xl">{user?.bio}</p>
        <FollowButton />
        <div className="flex gap-3">
          <a href="">{user?.followers} followers</a>
          <a href="">{user?.following} following</a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
