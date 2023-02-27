import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";

import Adivice from "./components/Advice";
import Quotes from "./components/Quotes";

const App = () => {
  const [hide, setHide] = useState("show");
  const [advice, setAdvice] = useState(false);
  const [quotes, setQuotes] = useState(false);

  function showAdvice() {
    setHide("hide");
    setQuotes(false);
    setAdvice(true);
  }

  function showQuotes() {
    setHide("hide");
    setAdvice(false);
    setQuotes(true);
  }

  return (
    <div>
      <div className={`main-card ${hide}`}>
        <p>What do you want ?</p>
        <div className="divider">
          <img
            src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1677123255/pattern-divider-mobile_msvzlw.svg"
            alt="divider"
            className="fc-divider"
          />
        </div>

        <div className="btn-container">
          <button type="button" onClick={showAdvice}>
            Advivce
          </button>
          <button type="button" onClick={showQuotes}>
            Quotes
          </button>
        </div>
      </div>
      {advice ? <Adivice advice={setAdvice} show={setHide} /> : ""}
      {quotes ? <Quotes quotes={setQuotes} show={setHide} /> : ""}
    </div>
  );
};

export default App;
