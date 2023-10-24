import {
  BookIcon,
  RepoIcon,
  ProjectIcon,
  PackageIcon,
} from "@primer/octicons-react";

const Tabs = () => {
  return (
    <div className="flex items-start border-b border-light-gray ps-80 mt-5 w-screen">
      <div className="tabs">
        <a className="tab hover:tab-bordered gap-1">
          <BookIcon /> Overview
        </a>
        <a className="tab hover:tab-bordered gap-1">
          <RepoIcon />
          Repositories
        </a>
        <a className="tab hover:tab-bordered gap-1">
          <ProjectIcon />
          Projects
        </a>
        <a className="tab hover:tab-bordered gap-1">
          <PackageIcon />
          Packages
        </a>
      </div>
    </div>
  );
};

export default Tabs;
