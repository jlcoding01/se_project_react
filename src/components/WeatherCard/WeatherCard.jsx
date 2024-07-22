import "./WeatherCard.css";
import { weatherCondition } from "../../utils/constants.js";
import React from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

function WeatherCard({ weatherData }) {
  const tempContext = React.useContext(CurrentTemperatureUnitContext);

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
        {Math.round(weatherData.temp[tempContext.currentTempUnit])}&deg;
        {tempContext.currentTempUnit}
      </p>
    </div>
  );
}

export default WeatherCard;
