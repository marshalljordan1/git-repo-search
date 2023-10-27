import { ThreeBarsIcon } from "@primer/octicons-react";
import Tabs from "./Tabs";
import githubLogo from "../assets/img/github-mark.png";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

/**
 * Navbar component displays the navigation bar with a GitHub logo and user information.
 */
const Navbar: React.FC = () => {
  // Use the useSelector hook to access the user data from the Redux store.
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <>
      <div className="container w-full">
        <div className="flex flex-col">
          <div className="flex mt-4 p-0">
            {/* Button with ThreeBarsIcon for opening a menu or navigation. */}
            <button className="btn button-border ms-1 sm:ms-4">
              <ThreeBarsIcon />
            </button>
            {/* GitHub logo image. */}
            <div className="w-10">
              <img src={githubLogo} width="40" alt="" />
            </div>
            {/* User's GitHub login or username. */}
            <button className="text-sm md:text-lg font-bold ms-3">
              {user?.login}
            </button>
          </div>
          <div>
            {/* Render the Tabs component for navigation tabs. */}
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
