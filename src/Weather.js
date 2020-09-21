import React, {useState} from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import './Weather.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready : false});

  function weatherResponse (response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }


  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="header">
          <p>Good Morning</p>
          <h1>{weatherData.city}</h1>
          <p><FormatDate date={weatherData.date} /></p>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <h3 className="icon-title text-capitalize">{weatherData.description}</h3>
          </div>
          <div className="col-6">
            <span className="temp"><strong>{Math.round(weatherData.temperature)}</strong></span><span className="unit"> ℃ | ℉</span>
            <ul>
              <li>Precipitation: 5%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
  );
  } else {
    const apiKey = "7f2bcb3fa67c76b6d051afd4ec0b0d33";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherResponse);
    return(
      "Loading..."
    )
  }
}
