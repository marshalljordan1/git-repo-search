import { ThreeBarsIcon } from "@primer/octicons-react";
import Tabs from "./Tabs";
import githubLogo from "../assets/img/github-mark.png";

const Navbar = () => {
  return (
    <>
      <div className="container w-full">
        <div className="flex flex-col">
          <div className="flex mt-4 p-0">
            <div className="btn button-border">
              <ThreeBarsIcon />
            </div>
            <div className="">
              <img src={githubLogo} width="40" alt="" />
            </div>
            <button className="font-bold btn normal-case text-sm md:text-base lg:text-lg">
              marshalljordan1
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
