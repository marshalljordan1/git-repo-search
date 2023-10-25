import {
  BookIcon,
  RepoIcon,
  PackageIcon,
  StarIcon,
  TableIcon,
} from "@primer/octicons-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGitHubData } from "../store/slices/githubSlice";

const Tabs: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    // Dispatch the action to fetch GitHub repositories
    dispatch(fetchGitHubData("marshalljordan1")); // Provide the username
  }, [dispatch]);

  return (
    <div className="flex items-start border-b light-gray-b-border w-screen">
      <div className="tabs mt-5 ms-5">
        <a className="tab gap-2 text-sm md:text-base lg:text-lg pb-12 text-black">
          <BookIcon size={20} /> Overview
        </a>
        <a className="tab tab-active active-tab gap-2 md:text-base lg:text-lg pb-11">
          <RepoIcon size={20} />
          Repositories
          <span className="badge bg-[#DDE3E7] py-3">{user?.public_repos}</span>
        </a>
        <a className="tab gap-2 text-sm md:text-base lg:text-lg pb-12 text-black">
          <TableIcon size={16} />
          Projects
        </a>
        <a className="tab gap-2 text-sm md:text-base lg:text-lg pb-12 text-black">
          <PackageIcon size={20} />
          Packages
        </a>
        <a className="tab gap-2 text-sm md:text-base lg:text-lg pb-12 text-black">
          <StarIcon size={20} /> Stars
        </a>
      </div>
    </div>
  );
};

export default Tabs;
