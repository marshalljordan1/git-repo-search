import { StarIcon } from "@primer/octicons-react";
const StarButton = () => {
  return (
    <>
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
