import avatar from "../assets/img/avatar.png";

const Avatar = () => {
  return (
    <div>
      <img
        src={avatar}
        width="260"
        height="260"
        className="avatar avatar-user width-full border light-gray-border z-10 h-auto"
      ></img>
    </div>
  );
};

export default Avatar;
