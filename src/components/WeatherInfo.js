import "./Components.css";

function WeatherInfo({icon, description}) {
  <div className="info">
    <img
      className="city-icon"
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={description}
    ></img>
    <p>{description}</p>
  </div>;
}

export default WeatherInfo;
