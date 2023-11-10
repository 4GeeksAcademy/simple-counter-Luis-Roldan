import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SecondsCounter } from "./SecondsCounter";

export const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    console.log(counter);

    return () => clearInterval(interval);
  }, [counter]);

  function calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10;
  }

  return (
    <div>
      <SecondsCounter
        hundredsThousandsDigit={calculateSeconds(counter, 100000)}
        tensThousandsDigit={calculateSeconds(counter, 10000)}
        thousandsDigit={calculateSeconds(counter, 1000)}
        hundredsDigit={calculateSeconds(counter, 100)}
        tensDigit={calculateSeconds(counter, 10)}
        oneDigit={calculateSeconds(counter, 1)}
      />
    </div>
  );
};

ReactDOM.render(<Home />, document.querySelector("#app"));
