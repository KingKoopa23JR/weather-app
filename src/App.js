import "./App.css";
import { getCoordinates, getWeather } from "./Api";

import Container from "./components/Container";

import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  //If wanted multiple results but sometimes weather API has hard time with lat and lon
  const getResults = async (res) => {
    const results = [];

    for (var i = 0; i < res.length; i++) {
      results.push(await getWeather(res[i]));
    }
    return results;
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      const coordinateData = await getCoordinates(query);
      console.log(coordinateData);
      const results = await getResults(coordinateData.data.features);
      setQuery("");
      setWeather(results);
      console.log(results);
    }
  };

  

  return (
    <div className="App dawn">
      <input
        type="text"
        className="search"
        placeholder="Enter your TimeZone Place"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={search}
      ></input>

      {weather.length !== 0 &&
        weather.map((weather) => (
          <div id="flipper" className="card" key={weather.data.id}>
            <Container
              name={weather.data.name}
              country={weather.data.sys.country}
              sunrise={weather.data.sys.sunrise}
              sunset={weather.data.sys.sunset}
              lon={weather.data.coord.lon}
              lat={weather.data.coord.lat}
              temp={weather.data.main.temp}
              humidity={weather.data.main.humidity}
              feel={weather.data.main.feels_like}
              max={weather.data.main.temp_max}
              min={weather.data.main.temp_min}
              weather={weather.data.weather[0].main}
              icon={weather.data.weather[0].icon}
              description={weather.data.weather[0].description}
              clouds= {weather.data.clouds.all}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
