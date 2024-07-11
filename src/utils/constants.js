export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const APIKey = "981f42f35773dec0c910dd691d759ee2";

export const latitude = 34.05;

export const longitude = -118.24;

export const coordinates = {
  latitude: 34.05,
  longitude: -118.24,
};

export const weatherCondition = [
  {
    daytime: "day",
    min: 800,
    max: 800,
    condition: "Clear",
    image: new URL(
      "../assets/weather-conditions/day-sunny.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "day",
    min: 801,
    max: 804,
    condition: "Clouds",
    image: new URL(
      "../assets/weather-conditions/day-cloudy.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "day",
    min: 500,
    max: 531,
    condition: "Rain",
    image: new URL("../assets/weather-conditions/day-rain.svg", import.meta.url)
      .href,
  },
  {
    daytime: "day",
    min: 300,
    max: 321,
    condition: "Drizzle",
    image: new URL("../assets/weather-conditions/day-rain.svg", import.meta.url)
      .href,
  },
  {
    daytime: "day",
    min: 200,
    max: 232,
    condition: "Thunderstorm",
    image: new URL(
      "../assets/weather-conditions/day-storm.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "day",
    min: 701,
    max: 781,
    condition: "Atmosphere",
    image: new URL("../assets/weather-conditions/day-fog.svg", import.meta.url)
      .href,
  },
  {
    daytime: "day",
    min: 600,
    max: 622,
    condition: "Snow",
    image: new URL("../assets/weather-conditions/day-snow.svg", import.meta.url)
      .href,
  },
  {
    daytime: "night",
    min: 800,
    max: 800,
    condition: "Clear",
    image: new URL(
      "../assets/weather-conditions/day-sunny.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "night",
    min: 801,
    max: 804,
    condition: "Clouds",
    image: new URL(
      "../assets/weather-conditions/day-cloudy.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "night",
    min: 500,
    max: 531,
    condition: "Rain",
    image: new URL("../assets/weather-conditions/day-rain.svg", import.meta.url)
      .href,
  },
  {
    daytime: "night",
    min: 300,
    max: 321,
    condition: "Drizzle",
    image: new URL("../assets/weather-conditions/day-rain.svg", import.meta.url)
      .href,
  },
  {
    daytime: "night",
    min: 200,
    max: 232,
    condition: "Thunderstorm",
    image: new URL(
      "../assets/weather-conditions/day-storm.svg",
      import.meta.url
    ).href,
  },
  {
    daytime: "night",
    min: 701,
    max: 781,
    condition: "Atmosphere",
    image: new URL("../assets/weather-conditions/day-fog.svg", import.meta.url)
      .href,
  },
  {
    daytime: "night",
    min: 600,
    max: 622,
    condition: "Snow",
    image: new URL("../assets/weather-conditions/day-snow.svg", import.meta.url)
      .href,
  },
];
