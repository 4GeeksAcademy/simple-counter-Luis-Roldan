//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter";


let time = 0;
setInterval(() => {
  time++;
  ReactDOM.render(
    <SecondsCounter seconds={time} />,
    document.querySelector("#app")
  );
}, 1000);

ReactDOM.render(
  <SecondsCounter seconds={0} />,
  document.querySelector("#app")
);
