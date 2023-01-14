import { useState } from "react";
import { getCoordinates, getWeather } from "../Api";

function Search(props) {
  const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState([]);

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
      console.log(results);
      setQuery("");
      return results;
    }
  };

  return (
    <input
      type="text"
      className="search"
      placeholder="Enter your TimeZone Place"
      value={query}
      /** Direct State ge Query Send Madadhu*/ onChange={(e) =>
        setQuery(e.target.value)
      }
      onKeyUp={search}
    ></input>
  );
}

export default Search;
