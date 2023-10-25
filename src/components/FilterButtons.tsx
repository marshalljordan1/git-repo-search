import { TriangleDownIcon } from "@primer/octicons-react";

const FilterButtons = () => {
  return (
    <div className="flex">
      <button className="btn btn-sm light-gray-border flex bg-gray-btn px-2 shadow">
        <p className="text-sm md:text-base lg:text-lg normal-case">
          Type <TriangleDownIcon />
        </p>
      </button>
      <button className="btn btn-sm light-gray-border text-sm md:text-base lg:text-lg flex bg-gray-btn normal-case ms-2 px-2 shadow">
        Language <TriangleDownIcon />
      </button>
      <button className="btn btn-sm light-gray-border text-sm md:text-base lg:text-lg flex bg-gray-btn normal-case ms-2 px-2 shadow">
        Sort <TriangleDownIcon />
      </button>
    </div>
  );
};

export default FilterButtons;
