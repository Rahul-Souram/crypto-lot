import React from "react";
import "./App.css";
import QuestionMark from "../src/svg/heart-circle.svg";
import Reverse from "../src/svg/reverse.svg";
import MemberIcon from "../src/svg/member-icon.svg";

function App() {
  return (
    <div className="card-body">
      <div className="card-container">
        <div className="card-header">
          <div className="mostplayed">most Played</div>
          <div>
            <img src={QuestionMark} alt="question-mark" />
          </div>
        </div>
        <div className="card-icons-section">
          <div>
            <img src={MemberIcon} alt="member-icon" />
          </div>
          <div>
            <img src={Reverse} alt="reverse" />
          </div>
          <div>
            <img src={MemberIcon} alt="member-icon" />
          </div>
        </div>
        <div className="card-details-section">
          <p className="title">Multi-user Lot</p>
          <p className="tagline">
            In this lot multiple people will bet against you. The condition for
            the lot to start is both sides should have equal funds
          </p>
        </div>
        <button type="button" className="card-btn">
          Create Lot
        </button>
      </div>
    </div>
  );
}

export default App;
