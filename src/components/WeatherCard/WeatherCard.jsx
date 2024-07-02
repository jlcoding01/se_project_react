import cloudy from "../../assets/cloudy.svg";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <div className="weatherCard">
      <img src={cloudy} alt="banner" className="weatherCard__condition" />
      <p className="weatherCard__degree">{weatherData.temp.F}&deg; F</p>
    </div>
  );
}

export default WeatherCard;
