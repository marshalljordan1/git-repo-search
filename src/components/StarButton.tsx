import { StarIcon } from "@primer/octicons-react";
const StarButton = () => {
  return (
    <>
      <button className="btn btn-sm flex bg-gray-btn normal-case light-gray-border">
        <StarIcon />
        Star
      </button>
    </>
  );
};

export default StarButton;
