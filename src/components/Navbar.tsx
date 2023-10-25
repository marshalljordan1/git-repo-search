import { ThreeBarsIcon } from "@primer/octicons-react";
import Tabs from "./Tabs";
import githubLogo from "../assets/img/github-mark.png";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGitHubData } from "../store/slices/githubSlice";

const Navbar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    // Dispatch the action to fetch GitHub repositories
    dispatch(fetchGitHubData("marshalljordan1")); // Provide the username
  }, [dispatch]);

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
              {user ? user.login : "Username"}
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
