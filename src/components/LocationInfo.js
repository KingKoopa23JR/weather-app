import './Components.css'

function LocationInfo({name, country, sunset, sunrise}) {
    function formatTime(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var meridiem = hours >= 12 ? 'pm' : 'am';
        hours = hours % 24;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + meridiem;
        return strTime;
      }
      sunrise = formatTime(new Date(sunrise * 1000));
      sunset = formatTime(new Date(sunset * 1000));
   

    return(
        <div className='l-info'>
            <h1 className='location'>
            <span>{name}</span>
            <sup>{country}</sup>
            </h1>
            <span className='rise'></span>
            <span>sunrise</span>
            <p className='sunrise'>{sunrise}</p>
            <span className='line'></span>
            <p className='sunset'>{sunset}</p>
            <span>sunset</span>
            <span className='set'></span>


        </div>
    )
}

export default LocationInfo;