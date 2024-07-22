import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants.js";
import "./Main.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import React from "react";

function Main({ weatherData, handleCardPreview }) {
  const tempContext = React.useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <h1 className="itemCard__header">
        Today is {Math.round(weatherData.temp[tempContext.currentTempUnit])}
        &deg; {tempContext.currentTempUnit} / You may want to wear:
      </h1>
      <div className="itemCard page__section">
        <ul className="itemCard__container">
          {defaultClothingItems
            // .filter((data) => {
            //   return data.weather == weatherData.type;
            // })
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                handleCardPreview={handleCardPreview}
              />
            ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
