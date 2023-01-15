import "./Components.css";

import Location from "./Location";
import WeatherInfo from "./WeatherInfo";


function FrontCard(props){
    const { name, country, icon, description } = props;

    return(
        <div className="flip-card-front">
        <Location name={name} country={country} />
        <WeatherInfo icon={icon} description={description} />
        </div>
    )
}

export default FrontCard;