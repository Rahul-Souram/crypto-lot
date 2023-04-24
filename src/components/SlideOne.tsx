import React from "react";
import Card from "./Card";

const SlideOne = ({
  setYourAsset,
  setOpposeAsset,
  page,
  content,
  yourAsset,
  opposeAsset,
}: any) => {
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

  const handler = (id: any, title: any) => {
    if (page === 0) {
      setYourAsset((prev: any) => ({
        ...prev,
        item: title,
        id: id,
      }));
    }
    if (page === 1) {
      setOpposeAsset((prev: any) => ({
        ...prev,
        item: title,
        id: id,
      }));
    }
  };

  return (
    <div>
      <div className="crypto-card-container">
        <Card
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
          page={page}
          contentData={EthereumItem}
          handler={handler}
        />

        <Card
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
          page={page}
          contentData={AvalancheItem}
          handler={handler}
        />
        <Card
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
          page={page}
          contentData={CardanoItem}
          handler={handler}
        />
        <Card
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
          page={page}
          contentData={ChainlinkItem}
          handler={handler}
        />
        <Card
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
          page={page}
          contentData={AlgorandItem }
          handler={handler}
        />
      </div>
    </div>
  );
};

export default SlideOne;
