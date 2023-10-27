/**
 * FollowButton component displays a follow button with varying text sizes based on screen size.
 */
const FollowButton = () => {
  return (
    <>
      {/* Render a button for following with varying text sizes based on screen size. */}
      <button className="btn btn-sm normal-case text-sm md:text-base lg:text-lg light-gray-border">
        Follow
      </button>
    </>
  );
};

export default FollowButton;
