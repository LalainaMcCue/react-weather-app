import React from "react";

export default function Greeting(props) {
  let hour = props.date.getHours();
  if (hour < 12) {
    return(
      <p>Good Morning</p>
      );
  } else if (hour >= 20) {
    return(
      <p>Good Night</p>
      );
  } else if (hour >= 17) {
    return(
      <p>Good Evening</p>
      );
  } else {
    return(
      <p>Good Afternoon</p>
      );
  }
}