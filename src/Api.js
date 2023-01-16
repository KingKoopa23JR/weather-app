import axios from "axios";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

const key = "2f8972effb68e34090772447fcb0d3e5";
const geoCodeAccessToken =
  "sk.eyJ1Ijoia2luZ2tvb3BhMjNqciIsImEiOiJjbGN4eWM0YzkxazFuM3hwbzRrYjRwcXo0In0.X0zgEnbIDBWtbHIcEReVrw";

export const getCoordinates = async (input) => {
  const res = await axios.get(
    geoCodeUrl + `${encodeURIComponent(input)}.json`,
    {
      params: {
        access_token: geoCodeAccessToken,
        limit: 1,
      },
    }
  );
    if (res.data.length === 0) return null;

  return res;
};

export const getWeather = async (input) => {
  const res = await axios.get(weatherUrl, {
    params: {
      q: input.place_name,
      cnt: 7,
      units: "imperial",
      appid: key,
    },
  });

  return res;
};
