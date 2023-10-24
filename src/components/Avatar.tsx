import avatar from "../assets/img/avatar.png";

const Avatar = () => {
  return (
    <div>
      <img
        src={avatar}
        width="260"
        height="260"
        className="avatar avatar-user width-full border border-light-gray z-10"
      ></img>
    </div>
  );
};

export default Avatar;
