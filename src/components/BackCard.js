import "./Components.css";

import Temperature from "./Temperature";
import LocationInfo from "./LocationInfo";

function BackCard(props) {
  const {
    temp,
    humidity,
    feel,
    max,
    min,
    sunset,
    sunrise,
    name,
    country,
    weather,
    icon,
    description,
    clouds,
  } = props;

  return (
    <div className="flip-card-back">
      <Temperature
        temp={temp}
        humidity={humidity}
        feel={feel}
        max={max}
        min={min}
      />
      <LocationInfo name={name} country={country} sunrise={sunrise} sunset={sunset}/>
    </div>
  );
}

export default BackCard;
