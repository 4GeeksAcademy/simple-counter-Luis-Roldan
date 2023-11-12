import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  return (
    <main className="bg-dark text-white d-flex gap-2 justify-content-center w-100 mt-1 py-1">
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ms-2">
        <FontAwesomeIcon icon={faClock} className="m-auto" />
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill">
        {Math.floor(props.seconds / 100000) % 10}
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill">
        {Math.floor(props.seconds / 10000) % 10}
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill">
        {Math.floor(props.seconds / 1000) % 10}
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill">
        {Math.floor(props.seconds / 100) % 10}
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill">
        {Math.floor(props.seconds / 10) % 10}
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill me-2">
        {Math.floor(props.seconds / 1) % 10}
      </div>
    </main>
  );
};
Counter.propTypes = {
  segundos: propTypes.number,
};
export default Counter;
