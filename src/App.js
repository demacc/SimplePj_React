import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [timer, setTimer] = useState(0);

  let startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  let stopTimer = () => {
    clearInterval(window.myTimer);
  };
  let resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div className="container">
      <h2>Timer</h2>
      <div className="time-container">
        <span> {Math.trunc(timer / 60)}minus</span>
        <span>{timer % 60}secs</span>
      </div>
      <div className="btn-container">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
