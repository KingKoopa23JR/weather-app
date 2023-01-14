import "./Components.css";

function Temperature({temp}) {
  return (
    <div className="city-temp">
      {Math.round(temp)}
      <sup>&deg;F</sup>
    </div>
  );
}

export default Temperature;
