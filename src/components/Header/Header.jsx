import logo from "../../assets/wtwr_logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({
  weatherData,
  handleAddBtn,
  toggleMobileMenu,
  isMobileMenuOpened,
  handelMenuAddBtn,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__logo-and-menu">
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>

          <button
            className="header__btn-menu"
            type="button"
            onClick={toggleMobileMenu}
          ></button>
        </div>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__subject">
        <ToggleSwitch />
        <button
          className="header__btn-add"
          type="button"
          onClick={handleAddBtn}
        >
          + Add clothes
        </button>
        <Link
          to="/profile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="header__user">
            <p className="header__user_info">Terrence Tegegne</p>
            <img
              className="header__user_avatar"
              src={avatar}
              alt="user__avatar"
            />
          </div>
        </Link>
      </div>
      <div
        className={`menu__modal ${
          isMobileMenuOpened === true && "modal_opened"
        }`}
      >
        <button
          className="menu__modal_btn-close"
          onClick={toggleMobileMenu}
        ></button>

        <Link
          to="/profile"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="menu__modal_user">
            <p className="menu__modal_user-info">Terrence Tegegne</p>
            <img
              className="menu__modal_user-avatar"
              src={avatar}
              alt="user__avatar"
            />
          </div>
        </Link>

        <button
          className="menu__modal__btn-add"
          type="button"
          onClick={handelMenuAddBtn}
        >
          + Add clothes
        </button>

        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
