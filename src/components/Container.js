import "./Components.css";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

function Container(props) {
  const { name, country, temp, icon, description } = props;

  const cardClick = event => {
    event.currentTarget.classList.toggle('card-flip');
  }

  return (
    <div className="inner-card" onClick={cardClick}>
        <FrontCard name={name} country={country} icon={icon} description={description}/>
        <BackCard temp={temp}/>
    </div>
  );
}

export default Container;
