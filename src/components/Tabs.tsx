import {
  BookIcon,
  RepoIcon,
  ProjectIcon,
  PackageIcon,
  StarIcon,
} from "@primer/octicons-react";

const Tabs = () => {
  return (
    <div className="flex items-start border-b border-light-gray">
      <div className="tabs mt-5 ms-3">
        <a className="tab gap-1 text-sm md:text-base lg:text-lg pb-10 text-black">
          <BookIcon size={20} /> Overview
        </a>
        <a className="tab tab-active active-tab gap-1 md:text-base lg:text-lg pb-9">
          <RepoIcon size={20} />
          Repositories
        </a>
        <a className="tab gap-1 text-sm md:text-base lg:text-lg pb-10 text-black">
          <ProjectIcon size={20} />
          Projects
        </a>
        <a className="tab gap-1 text-sm md:text-base lg:text-lg pb-10 text-black">
          <PackageIcon size={20} />
          Packages
        </a>
        <a className="tab gap-1 text-sm md:text-base lg:text-lg pb-10 text-black">
          <StarIcon size={20} /> Stars
        </a>
      </div>
    </div>
  );
};

export default Tabs;
