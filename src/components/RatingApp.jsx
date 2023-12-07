import React from "react";
import "./RatingApp.css";
import Icon from "./Icon";
import Header from "./Header";
import SubmitBtn from "./SubmitBtn";
import RateBtn from "./RateBtn";

const RatingApp = () => {
  const rateNums = [1, 2, 3, 4, 5];

  return (
    <div className="rating-app">
      <Icon />
      <Header />
      <div className="rating-btns-container">
        {rateNums.map((num, id) => {
          return <RateBtn key={id} number={num} />;
        })}
      </div>
      <SubmitBtn />
    </div>
  );
};

export default RatingApp;
