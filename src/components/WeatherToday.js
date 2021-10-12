import React from 'react';
import Day from './Day';

function WeatherToday(props){
    const{weathers} = props
    return (
     <>
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
            <h3 className='forecast_days'>Two Days Forecast</h3>
         </div>
          )
          }
         {weathers.cod === '400' ? (
          <div>
              <h3 className='welcome'>No Location Included</h3>
         </div> 
           ) : 
         (<div></div>) } 
    </>
    )
}

export default WeatherToday