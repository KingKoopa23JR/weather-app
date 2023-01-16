import "./Components.css";

function Location({ name, country, lat, lon }) {
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{country}</sup>
      </h2>
      <span>Latitude: {lat}</span>
      <span>Longitude: {lon}</span>

    </div>
  );
}

export default Location;
