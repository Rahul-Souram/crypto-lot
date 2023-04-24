import React from "react";
import Ethereum from "../svg/E1.svg";
import Avalanche from "../svg/E2.svg";
import Cardano from "../svg/E3.svg";
import Chainlink from "../svg/E4.svg";
import Algorand from "../svg/E5.svg";


const Card = ({ yourAsset, opposeAsset, page, handler, contentData}: any) => {
  return (
    <div>
      {contentData.map((child: any) => {
        const { item, id } = child;
        let image;

        switch (item) {
          case "Ethereum":
            image = Ethereum;
            break;
          case "Avalanche":
            image = Avalanche;
            break;
          case "Cardano":
            image = Cardano;
            break;
          case "Chainlink":
            image = Chainlink;
            break;
          case "Algorand":
            image = Algorand;
            break;
          default:
            break;
        }

        return (
          <div
            key={id}
            onClick={() => handler(id, item)}
            className="crypto-outer"
          >
            <div
              className={
                (yourAsset.id === id && page === 0) ||
                (opposeAsset.id === id && page === 1)
                  ? "crypto-inner active"
                  : "crypto-inner"
              }
            >
              <img src={image} alt={item} />
              <p>{item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
