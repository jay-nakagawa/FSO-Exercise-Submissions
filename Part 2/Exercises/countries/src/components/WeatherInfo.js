import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = ({city}) => {
    const [weather,setWeather] = useState([])
    const api_key = process.env.REACT_APP_WEATHER_KEY


    return(
        <h2>Weather in{city}</h2>
    )
}

export default WeatherData