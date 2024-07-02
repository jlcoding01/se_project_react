export const weatherApi = ({ latitude, longitude }, APIKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`,
    {
      authorization: APIKey,
      "Content-type": "application/json",
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error:${res.status}`);
  });
};

export const processWeatherData = (data) => {
  const result = {};
  result.temp = { F: data.main.temp };
  result.city = data.name;
  result.type = weatherType(result.temp.F);
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
