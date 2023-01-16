import "./Components.css";

import Location from "./Location";
import WeatherInfo from "./WeatherInfo";


function FrontCard(props){
    const { name, country, icon, description, lat, lon } = props;

    return(
        <div className="flip-card-front">
        <Location name={name} country={country} lat={lat} lon={lon} />
        <WeatherInfo icon={icon} description={description} />
        </div>
    )
}

export default FrontCard;