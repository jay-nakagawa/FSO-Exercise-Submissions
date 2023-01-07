import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = ({city}) => {
    const [weather,setWeather] = useState([])
    const api_key = process.env.REACT_APP_WEATHER_KEY
    console.log(api_key)

    useEffect(() => {
        console.log('effect')
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
          .then(response => {
            console.log(response.data)
            setWeather(response.data)
            
          })
      }, [city,api_key])

      
    return(
        <>

        {/* originally used weather? but array === truthy */}
        {weather.main? (
            <>
                <h2>Weather in {' '}{city}</h2>
                <div>The temp is {Math.ceil((weather.main.temp) - 273)} degree celsius </div>
                <div>wind {weather.wind.speed} m/s </div>
                <img alt="yuh" src ={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            </>
        ) :null }
        </>
    )
}

export default WeatherData