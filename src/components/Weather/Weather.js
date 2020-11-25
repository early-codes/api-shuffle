import React, { useEffect, useState } from 'react'
import './Weather.css'

const Weather = () => {

    const [weather, setWeather] = useState({})

    const [city, setCity] = useState("")

    const getWeather = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city || "istanbul"},tr&APPID=4175295206b8796d7550667f9cbc96ea&units=metric`)
            .then(res => res = res.json())
            .then(
                (result) => {
                    setWeather({ ...result });
                },

                (error) => {
                    console.log(error);
                }
            )
        console.log("sent req")
    }


    useEffect(() => {
        getWeather(city || "istanbul")
        console.log({ ...weather }, city)
    }, [city])  // eslint-disable-line react-hooks/exhaustive-deps

    const changeHandler = (event) => {
        setTimeout(() => {
            setCity(event.target.value)
        }, 3000);
    }

    return (
        <div className="weatherComponent">
            <input type="text" placeholder="Your City" name="city" onChange={changeHandler}
            />
            <p>{{ ...weather.main }.temp}</p>
            <p>{city || "istanbul"}</p>
        </div>
    )
}

export default Weather