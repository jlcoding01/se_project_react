import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <ItemCard>
        Today is {weatherData.temp.F}&deg; F / You may want to wear:
      </ItemCard>
    </main>
  );
}

export default Main;
