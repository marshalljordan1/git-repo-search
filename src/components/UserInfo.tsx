import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGithubData } from "../store/slices/githubSlice";
import FollowButton from "./FollowButton";

const UserInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    dispatch(fetchGithubData("marshalljordan1"));
  }, [dispatch]);

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
