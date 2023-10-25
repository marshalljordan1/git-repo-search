import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGithubData } from "../store/slices/githubSlice";

const Avatar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    dispatch(fetchGithubData("marshalljordan1"));
  }, [dispatch]);

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
