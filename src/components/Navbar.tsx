import { ThreeBarsIcon } from "@primer/octicons-react";
import Tabs from "./Tabs";
import githubLogo from "../assets/img/github-mark.png";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.github.user);

  return (
    <>
      <div className="container w-full">
        <div className="flex flex-col">
          <div className="flex mt-4 p-0">
            <div className="btn button-border ms-4">
              <ThreeBarsIcon />
            </div>
            <div className="">
              <img src={githubLogo} width="40" alt="" />
            </div>
            <button className="text-sm md:text-lg font-bold ms-3">
              {user?.login}
            </button>
          </div>
          <div>
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
