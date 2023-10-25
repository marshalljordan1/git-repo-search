import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar flex flex-col justify-content items-baseline w-4/12">
        <div className="ms-10 mt-6">
          <Avatar />
        </div>
        <div className="mt-8 w-9/12">
          <UserInfo />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
