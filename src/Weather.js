import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h3>Good Morning</h3>
      <h1>Cleveland</h1>
      <h3>Friday 9/18/20</h3>
      <div className="row">
        <div className="col-6">
          <h3>Partly Cloudy</h3>
        </div>
        <div className="col-6">
          <h1>60</h1>
          <p>℃|℉</p>
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
