import React, { useState } from "react";
import "./App.css";
import "./react-modal.css";
import QuestionMark from "../src/svg/heart-circle.svg";
import Reverse from "../src/svg/reverse.svg";
import MemberIcon from "../src/svg/member-icon.svg";
import { ModalComponent } from "./components/ModalComponent";

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleModalOpen = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };
  return (
    <div className="card-body">
      <div className="card-container">
        <div className="card-header">
          <div className="mostplayed">Most Played</div>
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
        <button
          type="button"
          className="card-btn"
          onClick={() => {
            handleModalOpen();
          }}
        >
          Create Lot
        </button>
      </div>
      <ModalComponent isModal={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
