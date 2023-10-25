import { TriangleDownIcon } from "@primer/octicons-react";

const FilterButtons = () => {
  return (
    <div className="flex gap-1">
      <button className="btn btn-sm light-gray-border flex bg-gray-btn ms-5">
        <p className="text-sm md:text-base lg:text-lg normal-case ">
          Type: All <TriangleDownIcon />
        </p>
      </button>
      <button className="btn btn-sm light-gray-border text-sm md:text-base lg:text-lg flex bg-gray-btn normal-case ms-5">
        Language: All <TriangleDownIcon />
      </button>
    </div>
  );
};

export default FilterButtons;
