import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGitHubData } from "../store/slices/githubSlice";

const Avatar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    // Dispatch the action to fetch GitHub repositories
    dispatch(fetchGitHubData("marshalljordan1")); // Provide the username
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
