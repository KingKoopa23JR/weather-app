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
    const app = document.querySelector(".App")

    if(app.classList.contains("dawn")){
      app.classList.remove("dawn");
      app.classList.add("day");
    }
    else{
      app.classList.remove("day");
      app.classList.add("dawn");
    }
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
