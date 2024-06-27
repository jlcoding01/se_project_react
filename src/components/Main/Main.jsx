import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main() {
  return (
    <main className="main">
      <WeatherCard />
      <ItemCard>Today is 75° F / You may want to wear:</ItemCard>
    </main>
  );
}

export default Main;
