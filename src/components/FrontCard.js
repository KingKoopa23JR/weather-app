import "./Components.css";

import Location from "./Location";

function FrontCard(props){
    const { name, country, lat, lon } = props;

    return(
        <div className="flip-card-front">
        <Location name={name} country={country} lat={lat} lon={lon} />
        </div>
    )
}

export default FrontCard;