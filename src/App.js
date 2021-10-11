import React, { useState } from 'react';
import './App.css'
import Day from './components/Day';

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

         console.log(twoDays)
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return(
      <div className='container'>
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
         {typeof weathers.main === 'undefined' ? (
           <div>
             <h3 className='welcome'>Welcome to The Weather App</h3>
           </div>
         ): (
          
        <div className='content_container'>
           <Day />
           <h1 className='location'>{weathers.name}, {weathers.sys.country} </h1>
           <h2 className='temp'>{Math.floor(weathers.main.temp)}ºC</h2>
           <h2 className='description'>{weathers.weather[0].description}</h2>
        </div>
         )
         }
        {weathers.cod === '400' ? (
         <div>
             <h3 className='welcome'>No Location Included</h3>
        </div> 
          ) : 
        (<div></div>) } 

        <h3 className='forecast_days'>Two Days Forecast</h3>
        <div className='forecast'>
          {forecast.map(cast => (
            <div className='forecast_container'>
              <img 
                 src={`http://openweathermap.org/img/wn/${cast.weather[0].icon}@2x.png`} 
                 alt=""
              />
               <h2 className="forecast_temp">{Math.floor(cast.temp.day)}ºC</h2>
               <h3 className="forecast_desc">{cast.weather[0].description}</h3>
            </div>
          ))}
        </div>

       </div>

      
    )
}

export default App
