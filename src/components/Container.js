import "./Components.css";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

function Container(props) {
  const {
    name,
    country,
    sunrise,
    sunset,
    lat,
    lon,
    temp,
    humidity,
    feel,
    max,
    min,
    weather,
    icon,
    description,
    clouds,
  } = props;

  const cardClick = (event) => {
    event.currentTarget.classList.toggle("card-flip");
    document.querySelector("#flipper").classList.toggle("expand");
  };

  return (
    <div className="inner-card" onClick={cardClick}>
      <FrontCard name={name} country={country} lat={lat} lon={lon} />
      <BackCard
        name={name}
        country={country}
        sunset={sunset}
        sunrise={sunrise}
        temp={temp}
        humidity={humidity}
        feel={feel}
        max={max}
        min={min}
        weather={weather}
        icon={icon}
        description={description}
        clouds={clouds}
      />
    </div>
  );
}

export default Container;
