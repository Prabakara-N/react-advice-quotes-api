import React, { useState, useEffect } from "react";
import { BsDice5Fill, BsArrowLeft } from "react-icons/bs";

const Advice = ({ advice, show }) => {
  const [data, setData] = useState([]);

  const getAdvice = async () => {
    await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData([data]));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  function goBack() {
    advice(false);
    show("show");
  }

  return (
    <div>
      <div className="main-card">
        <div className="back-arrow" onClick={goBack}>
          <BsArrowLeft className="arrow" />
        </div>
        {data.map((advice) => {
          return (
            <div key={advice.slip.id}>
              <h4 className="id">
                <span>ADVICE </span> {`#${advice.slip.id}`}
              </h4>
              <p className="quotes" key={advice.slip.id}>
                {`“ ${advice.slip.advice} ”`}
              </p>
              <div className="divider">
                <img
                  src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1677123255/pattern-divider-mobile_msvzlw.svg"
                  alt="divider"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="dice-btn">
        <button type="button" className="dice-img" onClick={getAdvice}>
          <BsDice5Fill className="dice-icon" />
        </button>
      </div>
    </div>
  );
};

export default Advice;
