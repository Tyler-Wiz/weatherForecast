import React from 'react';

function Forecast(props){
    const {cast} = props
    return (
        <div className='forecast_container' >
            <img 
                src={`http://openweathermap.org/img/wn/${cast.weather[0].icon}@2x.png`} 
                alt=""
            />
            <h2 className="forecast_temp">{Math.floor(cast.temp.day)}ºC</h2>
            <h3 className="forecast_desc">{cast.weather[0].description}</h3>
        </div>
    )
}

export default Forecast