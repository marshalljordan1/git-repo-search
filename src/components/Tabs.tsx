import {
  BookIcon,
  RepoIcon,
  PackageIcon,
  StarIcon,
  TableIcon,
  KebabHorizontalIcon,
} from "@primer/octicons-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchGithubData } from "../store/slices/githubSlice";

const Tabs: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.github.user);

  useEffect(() => {
    dispatch(fetchGithubData("marshalljordan1"));
  }, [dispatch]);

  return (
    <div className="flex items-start border-b light-gray-b-border w-screen">
      <div className="tabs mt-5 ms-1 sm:ms-5">
        <a className="tab gap-3 text-sm md:text-base lg:text-lg sm:pb-12 pb-3 text-black block">
          <BookIcon size={20} /> Overview
        </a>
        <a className="tab tab-active active-tab gap-3 md:text-base lg:text-lg sm:pb-11 pb-8 block">
          <RepoIcon size={20} /> Repositories
          <span className="badge bg-[#DDE3E7] py-3 ms-1">
            {user?.public_repos}
          </span>
        </a>
        <a className="tab gap-3 text-sm md:text-base lg:text-lg pb-12 text-black hidden sm:block">
          <TableIcon size={20} /> Projects
        </a>
        <a className="tab gap-3 text-sm md:text-base lg:text-lg pb-12 text-black hidden sm:block">
          <PackageIcon size={20} /> Packages
        </a>
        <a className="tab gap-2 text-sm md:text-base lg:text-lg pb-12 text-black hidden sm:block">
          <StarIcon size={20} /> Stars
        </a>
        <button className="tab gap-2 md:text-base lg:text-lg sm:pb-11 pb-8 ms-5 block sm:hidden">
          <KebabHorizontalIcon size={16} />
        </button>
      </div>
    </div>
  );
};

export default Tabs;
