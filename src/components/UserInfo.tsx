import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import FollowButton from "./FollowButton";

/**
 * UserInfo component displays user information, including bio and follow statistics.
 */
const UserInfo: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.userInfo);

  return (
    <div className="flex flex-col w-full md:w-64 lg:w-72 xl:w-96">
      <div className="flex flex-col gap-4">
        {/* Display the user's bio. */}
        <p className="text-base sm:text-xl">{user?.bio}</p>
        {/* Render the FollowButton component for following the user. */}
        <FollowButton />
        <div className="flex gap-3">
          {/* Display the number of followers and following. */}
          <a href="">{user?.followers} followers</a>
          <a href="">{user?.following} following</a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
