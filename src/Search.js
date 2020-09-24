import React, {useState} from "react";
import './Search.css';
import Weather from "./Weather";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("Cleveland");
  const [weatherData, setWeatherData] = useState({ready : false});

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "7f2bcb3fa67c76b6d051afd4ec0b0d33";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(weatherResponse);
    
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function weatherResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
   });
 }
 if (weatherData.ready) {
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input className="myLocation" type="submit" value="📍" />
        <input
          className="search-bar"
          type="search"
          placeholder="Enter a city..."
          onChange={handleCityChange}
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
      <Weather weatherData = {weatherData} />
    </div>
  );
 } else {
   const apiKey = "7f2bcb3fa67c76b6d051afd4ec0b0d33";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
   axios.get(apiUrl).then(weatherResponse);
   return "Loading...";
 }
}
