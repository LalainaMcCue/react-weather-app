import React, {useState} from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCel(event) {
    event.preventDefault();
    setUnit("ccelsius");
  }

  function convertToFahr(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
  return(
    <div className="WeatherTemp">
      <span className="temp">
        <strong>{Math.round(props.fahrTemp)}</strong>
      </span>
      <span className="unit">
        {" "}
        <a href="/" onClick={convertToCel}>℃</a> |{" "}
        <span><strong>℉</strong></span>
      </span>
    </div>
  );
  } else {
    let celTemp = (props.fahrTemp -32) * 5/9;
    return (
      <div className="WeatherTemp">
        <span className="temp">
          <strong>{Math.round(celTemp)}</strong>
        </span>
        <span className="unit">
          {" "}
          <span>
            <strong>℃ </strong>
          </span>{" "}
          |{" "}
          <a href="/" onClick={convertToFahr}>
            ℉
          </a>
        </span>
      </div>
    );
  }
}