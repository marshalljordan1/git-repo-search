import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col justify-content items-baseline w-3/12">
        <div className="ms-8">
          <Avatar />
        </div>
        <div className="mt-8 w-10/12">
          <UserInfo />
        </div>
        <div className="mt-5">
          <FollowButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
