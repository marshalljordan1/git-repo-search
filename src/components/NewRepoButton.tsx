import { RepoIcon } from "@primer/octicons-react";

const NewRepoButton = () => {
  return (
    <>
      <button className="btn btn-sm normal-case text-sm md:text-base lg:text-lg text-white bg-[#1E883D] hover:bg-[#1E883D] light-gray-border px-20 shadow">
        <RepoIcon size={20} /> New
      </button>
    </>
  );
};

export default NewRepoButton;
