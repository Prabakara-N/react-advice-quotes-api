import React, { useState, useEffect } from "react";
import { BsDice5Fill, BsArrowLeft } from "react-icons/bs";

const Quotes = ({ quotes, show }) => {
  const [data, setData] = useState([]);

  const getQuotes = async () => {
    await fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setData([data]));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  function goBack() {
    quotes(false);
    show("show");
  }

  return (
    <div>
      <div className="main-card">
        <div className="back-arrow" onClick={goBack}>
          <BsArrowLeft className="arrow" />
        </div>
        {data.map((quotes, index) => {
          return (
            <div key={index}>
              <p className="quotes" key={index}>
                {`“ ${quotes.content} ”`}
              </p>
              <h4 className="id">{`- ${quotes.author}`}</h4>
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
        <button type="button" className="dice-img" onClick={getQuotes}>
          <BsDice5Fill className="dice-icon" />
        </button>
      </div>
    </div>
  );
};

export default Quotes;
