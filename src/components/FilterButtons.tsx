import { TriangleDownIcon } from "@primer/octicons-react";

/**
 * FilterButtons component provides filter options for sorting.
 */
const FilterButtons = () => {
  return (
    <div className="flex mt-2 md:mt-2 lg:mt-2 xl:mt-0">
      {/* Filter button for sorting by type */}
      <button className="btn btn-sm light-gray-border bg-gray-btn normal-case xl:ms-2  shadow">
        Type <TriangleDownIcon />
      </button>
      {/* Filter button for sorting by language */}
      <button className="btn btn-sm light-gray-border bg-gray-btn normal-case ms-2 shadow">
        Language <TriangleDownIcon />
      </button>
      {/* Filter button for sorting by sort */}
      <button className="btn btn-sm light-gray-border bg-gray-btn normal-case ms-2 shadow">
        Sort <TriangleDownIcon />
      </button>
    </div>
  );
};

export default FilterButtons;
