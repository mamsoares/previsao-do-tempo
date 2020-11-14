export const weatherMap = [
  {
    key: "Haze",
    value: "FOG",
    time: "d",
  },
  {
    key: "Haze",
    value: "FOG",
    time: "n",
  },
  {
    key: "Clear",
    value: "CLEAR_DAY",
    time: "d",
  },
  {
    key: "Clear",
    value: "CLEAR_NIGHT",
    time: "n",
  },
  {
    key: "Clouds",
    value: "PARTLY_CLOUDY_DAY",
    time: "d",
  },
  {
    key: "Clouds",
    value: "PARTLY_CLOUDY_NIGHT",
    time: "n",
  },
  {
    key: "Snow",
    value: "SNOW",
    time: "d",
  },
  {
    key: "Snow",
    value: "SNOW",
    time: "n",
  },
  {
    key: "Rain",
    value: "RAIN",
    time: "d",
  },
  {
    key: "Rain",
    value: "RAIN",
    time: "n",
  },
  {
    key: "Mist",
    value: "RAIN",
    time: "d",
  },
  {
    key: "Mist",
    value: "RAIN",
    time: "n",
  },
  {
    key: "Smoke",
    value: "FOG",
    time: "d",
  },
  {
    key: "Smoke",
    value: "FOG",
    time: "n",
  },
  {
    key: "Thunderstorm",
    value: "FOG",
    time: "d",
  },
  {
    key: "Thunderstorm",
    value: "FOG",
    time: "n",
  },
];

export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
