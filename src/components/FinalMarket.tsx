import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Ethereum from "../svg/E1.svg";
import Avalanche from "../svg/E2.svg";
import Cardano from "../svg/E3.svg";
import Chainlink from "../svg/E4.svg";
import Algorand from "../svg/E5.svg";
import IconMarket from "../svg/icon-market.svg";
import "react-datepicker/dist/react-datepicker.css";

const FinalMarket = ({ opposeAsset, yourAsset, goback }: any) => {
  const [startDate, setStartDate] = useState(new Date()) as any;
  const [endDate, setEndDate] = useState(new Date()) as any;
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState(false);
  const [lot, setLot] = useState(false);

  let imageYours;

  switch (yourAsset) {
    case "Ethereum":
      imageYours = Ethereum;
      break;
    case "Avalanche":
      imageYours = Avalanche;
      break;
    case "Cardano":
      imageYours = Cardano;
      break;
    case "Chainlink":
      imageYours = Chainlink;
      break;
    case "Algorand":
      imageYours = Algorand;
      break;
    default:
      break;
  }

  //oppose
  let imageOpposite;

  switch (opposeAsset) {
    case "Ethereum":
      imageOpposite = Ethereum;
      break;
    case "Avalanche":
      imageOpposite = Avalanche;
      break;
    case "Cardano":
      imageOpposite = Cardano;
      break;
    case "Chainlink":
      imageOpposite = Chainlink;
      break;
    case "Algorand":
      imageOpposite = Algorand;
      break;
    default:
      break;
  }
  const createLotHandler = () => {
    if (value === "") {
      setValidation(true);
      setTimeout(() => {
        setValidation(false);
      }, 2000);
    } else {
      setLot(true);
      console.log(value, startDate, endDate);
    }
  };
  return (
    <div className="final-market">
      <div>
        <div className="heading-market">Take Position</div>
        <div className="market-icons-container">
          <div className="crypto-inner-market">
            <p>Your Asset</p>
            <img src={imageYours} alt={yourAsset} />
            <p>{yourAsset}</p>
          </div>
          <div>
            <img src={IconMarket} alt={IconMarket} />
          </div>
          <div className="crypto-inner-market">
            <p>Opposing Asset</p>
            <img src={imageOpposite} alt={opposeAsset} />
            <p>{opposeAsset}</p>
          </div>
        </div>
        <div className="input-fields">
          <div className="input-container">
            <label htmlFor="fund">Fund your Pool</label>
            <input
              type="text"
              id="fund"
              name="skills"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="start-date">Lot Starts On</label>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="fund">Lot Ends On</label>
            <DatePicker
              selected={endDate}
              onChange={(date: any) => setEndDate(date)}
            />
          </div>
        </div>
      </div>
      {validation && (
        <div className="heading-market">please fill all fields</div>
      )}
      {lot && <div className="heading-market">Lot created !</div>}
      <div className="btn-container">
        <button type="button" className="back-btn" onClick={() => goback()}>
          Back
        </button>
        <button
          type="button"
          className="next-btn"
          onClick={() => createLotHandler()}
        >
          Create lot
        </button>
      </div>
    </div>
  );
};

export default FinalMarket;
