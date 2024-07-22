import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar_user">
        <img className="sideBar_user-avatar" src={avatar} alt="user__avatar" />
        <p className="sideBar_user-info">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
