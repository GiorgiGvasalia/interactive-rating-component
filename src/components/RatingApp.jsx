// RatingApp.js
import "./RatingApp.css";
import { useState } from "react";
import Icon from "./Icon";
import Header from "./Header";
import SubmitBtn from "./SubmitBtn";
import RateBtn from "./RateBtn";
import Appreciation from "./Appreciation";

const RatingApp = () => {
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false);
  const [activeNumber, setActiveNumber] = useState(null);

  const rateNums = [1, 2, 3, 4, 5];

  const handleButtonClick = (number) => {
    setActiveNumber(number);
  };

  const handleSubmitClick = () => {
    if (!activeNumber) return;
    setSubmitBtnClicked(true);
  };

  return (
    <div className="rating-app">
      {!submitBtnClicked ? (
        <>
          <Icon />
          <Header />
          <div className="rating-btns-container">
            {rateNums.map((num, id) => (
              <RateBtn
                key={id}
                number={num}
                onButtonClick={() => handleButtonClick(num)}
                activeNumber={activeNumber}
              />
            ))}
          </div>
          <SubmitBtn onSubmitClick={handleSubmitClick} />
        </>
      ) : (
        <Appreciation rateValue={activeNumber} />
      )}
    </div>
  );
};

export default RatingApp;
