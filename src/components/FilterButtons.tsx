import { TriangleDownIcon } from "@primer/octicons-react";

const FilterButtons = () => {
  return (
    <div className="flex mt-2 md:mt-2 lg:mt-2 xl:mt-0">
      <button className="btn btn-sm light-gray-border bg-gray-btn normal-case xl:ms-2  shadow">
        Type <TriangleDownIcon />
      </button>
      <button className="btn btn-sm light-gray-border text-base bg-gray-btn normal-case ms-2 shadow">
        Language <TriangleDownIcon />
      </button>
      <button className="btn btn-sm light-gray-border bg-gray-btn normal-case ms-2 shadow">
        Sort <TriangleDownIcon />
      </button>
    </div>
  );
};

export default FilterButtons;
