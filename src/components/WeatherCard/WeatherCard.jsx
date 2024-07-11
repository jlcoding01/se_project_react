import cloudy from "../../assets/cloudy.svg";
import "./WeatherCard.css";
import { weatherCondition } from "../../utils/constants.js";

function WeatherCard({ weatherData }) {
  const currentCodition = weatherCondition.filter((item) => {
    return (
      item.daytime == weatherData.daytime &&
      // item.condition == weatherData.weatherCondition
      weatherData.weatherId <= item.max &&
      weatherData.weatherId >= item.min
    );
  });

  const weatherConditionUrl = currentCodition[0]?.image;

  return (
    <div className="weatherCard">
      <img
        src={weatherConditionUrl}
        alt="banner"
        className="weatherCard__condition"
      />
      <p className="weatherCard__degree">
        {Math.round(weatherData.temp.F)}&deg; F
      </p>
    </div>
  );
}

export default WeatherCard;
