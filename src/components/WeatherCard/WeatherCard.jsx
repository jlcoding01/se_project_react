import cloudy from "../../assets/cloudy.svg";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <div className="weatherCard">
      <img src={cloudy} alt="banner" className="weatherCard__condition" />
      <p className="weatherCard__degree">75F</p>
    </div>
  );
}

export default WeatherCard;
