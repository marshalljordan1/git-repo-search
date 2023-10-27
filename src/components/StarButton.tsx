import { StarIcon } from "@primer/octicons-react";

/**
 * StarButton component represents a button for starring a repository.
 */
const StarButton = () => {
  return (
    <>
      {/* Render a button with the StarIcon for starring a repository. */}
      <button className="btn btn-sm flex bg-gray-btn normal-case light-gray-border shadow">
        <div className="flex gap-1">
          <StarIcon />
          Star
        </div>
      </button>
    </>
  );
};

export default StarButton;
