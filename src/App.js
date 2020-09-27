import React from 'react';
import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <footer className="tag">
          This code is{" "}
          <a href="https://github.com/LalainaMcCue/react-weather-app" target="_blank">
            open-sourced
          </a>{" "}
          on Github.
        </footer>
      </div>
    </div>
  );
}


