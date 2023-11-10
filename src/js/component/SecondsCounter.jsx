import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const SecondsCounter = (props) => {
  return (
    <div className="bg-dark text-white d-flex gap-2 justify-content-center w-100 mt-1 py-1 ">
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ms-2 ">
        <FontAwesomeIcon icon={faClock} className="m-auto" />
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ">
        <p className="m-auto">{props.hundredsThousandsDigit}</p>
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ">
        <p className="m-auto">{props.tensThousandsDigit}</p>
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ">
        <p className="m-auto">{props.thousandsDigit}</p>
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ">
        <p className="m-auto">{props.hundredsDigit}</p>
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill ">
        <p className="m-auto">{props.tensDigit}</p>
      </div>
      <div className="bg-dark text-white border text-center d-inline-flex p-2 flex-fill me-2 ">
        <p className="m-auto">{props.oneDigit}</p>
      </div>
    </div>
  );
};

SecondsCounter.PropTypes = {
  hundredsThousandsDigit: PropTypes.number,
  tensThousandsDigit: PropTypes.number,
  thousandsDigit: PropTypes.number,
  hundredsDigit: PropTypes.number,
  tensDigit: PropTypes.number,
  oneDigit: PropTypes.number,
};
