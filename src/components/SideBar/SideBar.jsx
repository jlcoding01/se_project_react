import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";
// import avatar from "../../assets/avatar.svg";

function SideBar({ handleOpenEditProfileModal }) {
  const { name, avatar } = useContext(CurrentUserContext) || {};
  return (
    <div className="sideBar">
      <div className="sideBar_user">
        <img className="sideBar_user-avatar" src={avatar} alt="user__avatar" />
        <p className="sideBar_user-info">{name}</p>
      </div>
      <button
        className="sideBar__btn-change-profile"
        type="button"
        onClick={handleOpenEditProfileModal}
      >
        Change profile data
      </button>
      <button className="sideBar__btn-logout" type="button">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
