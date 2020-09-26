import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import WeatherForcast from "./WeatherForecast";
import './Weather.css';

export default function Weather(props) {
    return (
      <div className="Weather">
        <div className="header">
          <p>Good Morning</p>
          <h1>{props.weatherData.city}</h1>
          <p>
            <FormatDate date={props.weatherData.date} />
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <WeatherIcon code={props.weatherData.icon} />
            <h3 className="icon-title text-capitalize">
              {props.weatherData.description}
            </h3>
          </div>
          <div className="col-6">
            <WeatherTemp fahrTemp={props.weatherData.temperature} />
            <ul>
              <li>Humidity: {props.weatherData.humidity}%</li>
              <li>Wind: {Math.round(props.weatherData.wind)} mph</li>
            </ul> 
          </div>
        </div>
        <WeatherForcast city={props.weatherData.city} />
      </div>
    );
}
