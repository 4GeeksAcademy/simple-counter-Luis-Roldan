import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { SecondsCounter } from "./SecondsCounter";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  calculateSeconds(aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <SecondsCounter
          hundredsThousandsDigit={this.calculateSeconds(
            this.state.counter,
            100000
          )}
          tensThousandsDigit={this.calculateSeconds(this.state.counter, 10000)}
          thousandsDigit={this.calculateSeconds(this.state.counter, 1000)}
          hundredsDigit={this.calculateSeconds(this.state.counter, 100)}
          tensDigit={this.calculateSeconds(this.state.counter, 10)}
          oneDigit={this.calculateSeconds(this.state.counter, 1)}
        />
      </div>
    );
  }
}

// Functional secondscounter using UseState
//
// export const Home = () => {
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((counter) => counter + 1);
//     }, 1000);
//     console.log(counter);

//     return () => clearInterval(interval);
//   }, [counter]);

//   function calculateSeconds(aCounter, placeValue) {
//     return Math.floor(aCounter / placeValue) % 10;
//   }

//   return (
//     <div>
//       <SecondsCounter
//         hundredsThousandsDigit={calculateSeconds(counter, 100000)}
//         tensThousandsDigit={calculateSeconds(counter, 10000)}
//         thousandsDigit={calculateSeconds(counter, 1000)}
//         hundredsDigit={calculateSeconds(counter, 100)}
//         tensDigit={calculateSeconds(counter, 10)}
//         oneDigit={calculateSeconds(counter, 1)}
//       />
//     </div>
//   );
// };

ReactDOM.render(<Home />, document.querySelector("#app"));
