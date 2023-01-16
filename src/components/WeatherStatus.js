import './Components.css'

function WeatherStatus({icon, weather, description, clouds}) {
    let weatherVisual = ` http://openweathermap.org/img/wn/${icon}@2x.png`
    return(
        <div className='info'>
            <span className='weather'>{weather}</span>
            <img src={weatherVisual} alt={description}></img>
            <span className='description'><i>{description}</i></span>
            <span>Cloud Coverage: {clouds}%</span>
            
        </div>
    )
}

export default WeatherStatus;