import React from "react";
import './SelectionFeedback.css'

const SelectionFeedback = ({ value }) => {
  return (
    <div className="selection-final">
      <label className="selection-label">You selected {value} out of 5</label>
      <div>
        <p className="thankyou">Thank You</p>
        <p className="paragraph">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default SelectionFeedback;
