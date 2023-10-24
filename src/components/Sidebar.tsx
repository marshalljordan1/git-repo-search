import Avatar from "./Avatar";
import FollowButton from "./FollowButton";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col justify-content items-baseline">
        <div className="ms-8">
          <Avatar />
        </div>
        <div className="mt-8 w-64">
          <UserInfo />
        </div>
        <div className="mt-5 w-full">
          <FollowButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
