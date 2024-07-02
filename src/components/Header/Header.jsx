import logo from "../../assets/wtwr_logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

function Header({ weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button className="header__btn-add" type="button">
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__user_info">Terrence Tegegne</p>
        <img className="header__user_avatar" src={avatar} alt="user__avatar" />
      </div>
    </header>
  );
}

export default Header;
