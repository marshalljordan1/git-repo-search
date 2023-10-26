import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FollowButton from "./FollowButton";

const UserInfo: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <div className="container flex flex-col">
      <p className="font-bold text-2xl">{user?.name}</p>
      <div className="flex">
        <p className="font-normal text-xl text-light-gray font-light">
          {user?.login}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl mt-5">{user?.bio}</p>
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
