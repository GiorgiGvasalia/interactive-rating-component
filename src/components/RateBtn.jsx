import React, { useState } from "react";
import "./RateBtn.css";

const RateBtn = ({ number, onButtonClick, activeNumber }) => {
  const [clicked, setClicked] = useState(null);

  const handleButtonClick = () => {
    setClicked(true);
    onButtonClick(number);
  };

  return (
    <button
      className={`rate-btn ${activeNumber === number ? 'active' : ''}`}
      value={clicked}
      onClick={handleButtonClick}
    >
      {number}
    </button>
  );
};

export default RateBtn;
