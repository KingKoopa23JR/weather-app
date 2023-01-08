import './App.css';
import { getCoordinates } from './Api';

import { useState } from 'react'

function App() {

  const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState([]);

  
  const search = async (e) => {
    console.log("data");
    //that is calling via an await function the query that is passed
      if(e.key === 'Enter'){
        const data = await getCoordinates(query);
        // setWeather(data);
        console.log(data);
        setQuery('');
      }
  }

  return (
    <div className="App">
      <input type='text' className='search' placeholder='Enter your TimeZone Place' value={query}/** Direct State ge Query Send Madadhu*/ onChange={(e)=> setQuery(e.target.value)} onKeyUp={search}></input>
      <div className="Title">
        <div>
          <span></span>
          <sup></sup>
        </div>
        <div className="Temperature">
        </div>
        <div className="description"></div>
      </div>
    </div>
  );
}

export default App;
