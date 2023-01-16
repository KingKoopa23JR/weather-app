import "./Components.css";

function Temperature({ temp, humidity, feel, max, min }) {
  return (
    <div className="city-temp">
      <p>
        Temperature: {Math.round(temp)}
        <sup>&deg;F</sup>
      </p>
      <p>Humidity: {humidity}%</p>
      <p> Real Feel: {feel}<sup>&deg;F</sup></p>
      <p>Max Temp: {max}<sup>&deg;F</sup></p>
      <p>Min Temp: {min}<sup>&deg;F</sup></p>
    </div>
  );
}

export default Temperature;
