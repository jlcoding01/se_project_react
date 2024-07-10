import logo from "../../assets/wtwr_logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

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
          <img className="header__logo" src={logo} alt="logo" />
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
      {/* <div
        className={`header__subject header__modal ${
          activeModal === "header-menu" && "modal_opened"
        }`}
      >
        <button
          className="header__modal_btn-close"
          onClick={handleCloseModal}
        ></button>
        <button
          className="header__btn-add"
          type="button"
          onClick={handleAddBtn}
        >
          + Add clothes
        </button>
        <div className="header__user">
          <p className="header__user_info">Terrence Tegegne</p>
          <img
            className="header__user_avatar"
            src={avatar}
            alt="user__avatar"
          />
        </div>
      </div> */}
      <div className="header__subject">
        <button
          className="header__btn-add"
          type="button"
          onClick={handleAddBtn}
        >
          + Add clothes
        </button>
        <div className="header__user">
          <p className="header__user_info">Terrence Tegegne</p>
          <img
            className="header__user_avatar"
            src={avatar}
            alt="user__avatar"
          />
        </div>
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
        <button
          className="menu__modal__btn-add"
          type="button"
          onClick={handelMenuAddBtn}
        >
          + Add clothes
        </button>

        <div className="menu__modal_user">
          <p className="menu__modal_user-info">Terrence Tegegne</p>
          <img
            className="menu__modal_user-avatar"
            src={avatar}
            alt="user__avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
