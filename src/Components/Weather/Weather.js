import React from 'react'

import './Weather.css'

function Weather({ weather_data }) {

    return (
        <div className="weather">

            {weather_data ?
                <div className="weather__data">
                    <h1 className="weather__temp">{weather_data.main?.temp} Degree celcius</h1>
                    <h5 className="weather__city">{weather_data?.name}, India</h5>
                </div>
                :
                <div>
                    <p>Please enter your city first</p>
                </div>
            }

        </div>
    )

}

export default Weather
