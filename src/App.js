import React, { useState } from 'react';
import './App.css'
import Forecast from './components/Forecast';
import WeatherToday from './components/WeatherToday';

function App(){
  const apiKey = 'b6ea019473b1df46a1fa1dac301537dd'
  const [query, setQuery] = useState('')
  const [weathers, setWeather] = useState([])
  const [forecast , setForecast] = useState([])
     
    const displayWeather = async (e) => {
        e.preventDefault()
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`
         const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&units=metric&appid=${apiKey}`
         const res =  await fetch(url)
         const data = await res.json()
         setWeather(data)
         
         const response = await fetch(forecastUrl)
         const forecastData = await response.json()
         const twoDays = forecastData.list.slice(1,3)
         setForecast(twoDays)  

    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }
   
    return(
      <div className={(typeof weathers.main != "undefined") ? ((weathers.main.temp > 16) ? 'hot' : 'container') : 'container'}>
          {/* The Form Component  */}
          
          <form className='form' onSubmit={displayWeather}>
            <input 
                type='text'
                name='query'
                placeholder='City or Country'
                className='input_form'
                onChange={handleChange}
                value={query}
            />
          </form>

       {/* weather for the Present day */}

        <WeatherToday weathers={weathers}/>
     
        {/* Two Days Weather Forecast */}
        <div className='forecast'>
          {forecast.map(cast => (
            <Forecast cast={cast} key={cast.deg}/>
          ))}
        </div>
       </div>

      
    )
}

export default App
