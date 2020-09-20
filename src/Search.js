import React from "react";
import './Search.css';

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input className="myLocation" type="submit" value="📍" />
        <input
          className="search-bar"
          type="search"
          placeholder="Enter a city..."
        />
        <input className="search-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
