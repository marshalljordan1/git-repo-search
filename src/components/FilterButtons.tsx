import { TriangleDownIcon } from "@primer/octicons-react";

const FilterButtons = () => {
  return (
    <div className="flex gap-1">
      <details className="dropdown">
        <summary className="ms-4 btn btn-sm btn-outline normal-case w-full">
          Type: All <TriangleDownIcon />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <details className="dropdown">
        <summary className="ms-4 btn btn-sm btn-outline text-grey-100 normal-case w-full">
          Language: All <TriangleDownIcon />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default FilterButtons;
