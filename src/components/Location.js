import "./Components.css";

function Location({ name, country }) {
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{country}</sup>
      </h2>
      <span>state</span>
    </div>
  );
}

export default Location;
