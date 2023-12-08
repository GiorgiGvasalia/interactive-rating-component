import "./RatingApp.css";
import { useState } from "react";
import Icon from "./Icon";
import Header from "./Header";
import SubmitBtn from "./SubmitBtn";
import RateBtn from "./RateBtn";
import Appreciation from "./Appreciation";

const RatingApp = () => {

  const [ submitBtnClicked, setSubmitBtnClicked ] = useState(false)
  const [ activeNumber, setActiveNumber ] = useState(null)


  const rateNums = [1, 2, 3, 4, 5];

  const handleButtonClick = (number) => {

    console.log("Button clicked");
    setActiveNumber(number)
    
  };
  
  const handleSubmitClick = () => {
    console.log(activeNumber)
    if(!activeNumber) return
    console.log("Submit clicked");
    setSubmitBtnClicked(true)
  };
  return (
    <div className="rating-app">
      {!submitBtnClicked ? (
        <>
          <Icon />
          <Header />
          <div className="rating-btns-container">
            {rateNums.map((num, id) => {
              return (
                <RateBtn
                  key={id}
                  number={num}
                  onButtonClick={handleButtonClick}
                  activeNumber={activeNumber}
                />
              );
            })}
          </div>
          <SubmitBtn onSubmitClick={handleSubmitClick} />
        </>
      ) : (
        <Appreciation value={activeNumber}/>
      )}
    </div>
  );
};

export default RatingApp;
