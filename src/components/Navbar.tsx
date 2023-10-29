import { ThreeBarsIcon } from "@primer/octicons-react";
import Tabs from "./Tabs";
import githubLogo from "../assets/img/github-mark.png";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import SearchUser from "./SearchUser";

const Navbar: React.FC = () => {
  // Use the useSelector hook to access the user data from the Redux store.
  const user = useSelector((state: RootState) => state.github.userInfo);

  return (
    <div className="container w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-row mt-4 p-0">
          {/* Button with ThreeBarsIcon for opening a menu or navigation. */}
          <button className="btn button-border ms-1 mt-0 sm:mt-2 sm:ms-4">
            <ThreeBarsIcon />
          </button>
          {/* GitHub logo image. */}
          <div className="w-10 sm:mt-2 mt-1">
            <img src={githubLogo} width="40" alt="" />
          </div>
          {/* User's GitHub login or username. */}
          <div className="ms-3 mt-4">
            <button className="text-sm md:text-lg font-bold">
              {user?.login}
            </button>
          </div>
        </div>
        <div className="mt-6 sm:ms-16 px-4">
          {/* Search new username. */}
          <SearchUser />
        </div>
      </div>
      <div>
        {/* Render the Tabs component for navigation tabs. */}
        <Tabs />
      </div>
    </div>
  );
};

export default Navbar;
