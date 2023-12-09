// RateBtn.js
import "./RateBtn.css";

const RateBtn = ({ number, onButtonClick, activeNumber }) => {
  return (
    <button
      className={`rate-btn ${activeNumber === number ? 'active' : ''}`}
      onClick={() => onButtonClick(number)}
    >
      {number}
    </button>
  );
};

export default RateBtn;
