import ReactDOM from "react-dom";
import "./styles.css";
import React from "react";
import Times from "./timer";
import Timemin from "./timermin";
import Timehour from "./timerhour";
import Timefrac from "./timerfrac";

const Chrono = () => (
  <div className="Chrono">
    <Timehour />
    <div className="separation">
      <strong>:</strong>
    </div>
    <Timemin />
    <div className="separation">
      <strong>:</strong>
    </div>
    <Times />
    <div className="separation">
      <strong>:</strong>
    </div>
    <Timefrac />
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Chrono />, rootElement);
