import "./Components.css";

import Temperature from "./Temperature";

function BackCard(props) {
    const {temp} = props

    return(
        <div className="flip-card-back">
            <Temperature temp={temp} />
        </div>
    )
}

export default BackCard;