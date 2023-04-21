import React from "react";
import Ethereum from "../svg/E1.svg";
import Avalanche from "../svg/E2.svg";
import Cardano from "../svg/E3.svg";
import Chainlink from "../svg/E4.svg";
import Algorand from "../svg/E5.svg";

const SlideOne = ({ setYourAsset, setOpposeAsset, page, content, yourAsset, opposeAsset }: any) => {
  const EthereumItem = content.filter((child: any) => {
    return child.item === "Ethereum";
  });

  const AvalancheItem = content.filter((child: any) => {
    return child.item === "Avalanche";
  });

  const CardanoItem = content.filter((child: any) => {
    return child.item === "Cardano";
  });

  const ChainlinkItem = content.filter((child: any) => {
    return child.item === "Chainlink";
  });

  const AlgorandItem = content.filter((child: any) => {
    return child.item === "Algorand";
  });

  const handler = (title: any) => {
    if (page === 0) {
      setYourAsset(title);
    }
    if (page === 1) {
      setOpposeAsset(title);
    }
  };

  return (
    <div>
      <div className="crypto-card-container">
        <div>
          {EthereumItem.map((id: any) => {
            const { item } = id;
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
                key={item}
                onClick={() => handler(item)}
                className="crypto-outer"
              >
                <div className="crypto-inner">
                  <img src={image} alt={item} />
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {AvalancheItem.map((id: any, index: any) => {
            const { item } = id;
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
                key={index}
                onClick={() => handler(item)}
                className="crypto-outer"
              >
                <div className="crypto-inner">
                  <img src={image} alt={item} />
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {CardanoItem.map((id: any, index:any) => {
            const { item } = id;
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
                key={index}
                onClick={() => handler(item)}
                className="crypto-outer"
              >
                <div className="crypto-inner">
                  <img src={image} alt={item} />
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {ChainlinkItem.map((id: any, index: any) => {
            const { item } = id;
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
                key={index}
                onClick={() => handler(item)}
                className="crypto-outer"
              >
                <div className="crypto-inner">
                  <img src={image} alt={item} />
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {AlgorandItem.map((id: any, index: any) => {
            const { item } = id;
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
                key={index}
                onClick={() => handler(item)}
                className="crypto-outer"
              >
                <div className="crypto-inner">
                  <img src={image} alt={item} />
                  <p>{item}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
