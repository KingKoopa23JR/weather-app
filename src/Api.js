import axios from "axios"

// const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const geoCodeUrl = 'http://api.openweathermap.org/geo/1.0/direct';

const key = '2f8972effb68e34090772447fcb0d3e5'

export const getCoordinates = async (input) => {
    const res = await axios.get(geoCodeUrl,{
        params:{
            q: input,
            limit: 5,
            appid: key
            
            
        }
    })
    return res;
}
