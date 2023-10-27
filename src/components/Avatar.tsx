/**
 * Avatar component displays a user's avatar image.
 */
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

/**
 * Functional component to display a user's avatar image.
 *
 * @component
 */
const Avatar: React.FC = () => {
  // Use the useSelector hook to access the user data from the Redux store.
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <>
      {/* Conditional rendering based on the presence of user data. */}
      {user ? (
        <img
          // Display the user's avatar image
          src={user.avatar_url}
          width="260"
          height="260"
          className="avatar-border w-28 sm:w-full h-auto"
          alt="User Avatar"
        />
      ) : (
        <div>Loading...</div> // Display "Loading..." when user data is not available.
      )}
    </>
  );
};

export default Avatar;
