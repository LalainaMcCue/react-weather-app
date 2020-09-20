import React from "react";
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
      <div className="header">
        <p>Good Morning</p>
        <h1>Cleveland</h1>
        <p>Friday 9/18/20</p>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 className="icon-title">Partly Cloudy</h3>
        </div>
        <div className="col-6">
          <span className="temp"><strong>60</strong></span><span className="unit"> ℃ | ℉</span>
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 2%</li>
            <li>Wind: 15 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
