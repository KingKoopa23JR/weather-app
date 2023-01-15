import "./App.css";
import { getCoordinates, getWeather } from "./Api";

import Container from "./components/Container";

import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const getResults = async (res) => {
    const results = [];

    for (var i = 0; i < res.length; i++) {
      results.push(await getWeather(res[i]));
    }
    return results;
  };

  const search = async (e) => {
    //that is calling via an await function the query that is passed
    if (e.key === "Enter") {
      const coordinateData = await getCoordinates(query);
      const results = await getResults(coordinateData.data);
      setQuery("");
      setWeather(results);
    }
  };

  

  //when routing try putting lat and lon through URL params and calling API on new page
  return (
    <div className="App">
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
              temp={weather.data.main.temp}
              icon={weather.data.weather.icon}
              description={weather.data.weather.description}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
