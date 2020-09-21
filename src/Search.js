import React, {useState} from "react";
import './Search.css';
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("Cleveland");

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

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
      <Weather defaultCity = {city} />
    </div>
  );
}
