import { request } from "./api";

export const weatherApi = ({ latitude, longitude }, APIKey) => {
  return request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`,
    {
      authorization: APIKey,
      "Content-type": "application/json",
    }
  );
};

export const processWeatherData = (data) => {
  const result = {};
  result.temp = {
    F: data.main.temp,
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.city = data.name;
  result.type = weatherType(result.temp.F);
  result.daytime = dayTime(data);
  result.weatherCondition = data.weather[0].main;
  result.weatherId = data.weather[0].id;
  return result;
};

const weatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

const dayTime = (data) => {
  if (
    Date.now() / 1000 > data.sys.sunrise &&
    Date.now() / 1000 < data.sys.sunset
  ) {
    return "day";
  } else {
    return "night";
  }
};
