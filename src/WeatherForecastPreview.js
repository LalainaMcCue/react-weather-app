import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcastPreview.css";

export default function WeatherForecastPreview (props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return (`${hours}:00`);
  }

  function temperature() {
    let maxTemp = Math.ceil(props.data.main.temp_max);
    let minTemp = Math.floor(props.data.main.temp_min);
    return(
      <span><strong>{maxTemp}</strong> | {minTemp}</span>
      );
  }

  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );

}

