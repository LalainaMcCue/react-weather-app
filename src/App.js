import React from 'react';
import './App.css';
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather defaultCity="Cleveland"/>
      </div>
    </div>
  );
}


