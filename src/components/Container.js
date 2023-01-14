import "./Components.css";

import Location from "./Location";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
function Container(props) {
  const { name, country, temp, icon, description } = props;

  return (
    <div className="card">
      <Location name={name} country={country} />
      <Temperature temp={temp} />
      <WeatherInfo icon={icon} description={description} />
    </div>
  );
}

export default Container;
