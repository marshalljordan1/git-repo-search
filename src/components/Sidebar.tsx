import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import Username from "./Username";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-content items-baseline me-0 sm:me-10">
        <div className="flex flex-row sm:flex-col ms-5 sm:ms-10 sm:mt-6 mt-12 w-full">
          <Avatar />
          <Username />
        </div>
        <div className="mt-8">
          <UserInfo />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
