import React, { useState } from "react";
import ReactModal from "react-modal";
import { TabSection } from "../components/TabSection";
import CloseModal from "../svg/close-btn.svg";
import FinalMarket from "./FinalMarket";
import data from "../crypto.json";

// Define the interface for the Tab
interface Tab {
  title: string;
  content: any;
}

const ModalComponent = ({ closeModal, isModal }: any) => {
  const tabsData: Tab[] = [
    {
      title: "crypto",
      content: data.crypto,
    },
    {
      title: "indexes",
      content: data.indexes,
    },
    {
      title: "stocks",
      content: data.stocks,
    },
    {
      title: "commodities",
      content: data.commodities,
    },
    {
      title: "Forex",
      content: data.forex,
    },
  ];
  const [page, setPage] = useState(0);

  const [yourAsset, setYourAsset] = useState({ id: "", item: ""});
  const [opposeAsset, setOpposeAsset] = useState({ id: "", item: ""});
  const [valid, setValid] = useState(false);

  const goback = () => {
    setPage(page - 1);
  };

  const goforward = () => {
    if (
      (page === 0 && yourAsset.item === "") ||
      (page === 1 && opposeAsset.item === "")
    ) {
      setValid(true);
      setTimeout(() => {
        setValid(false);
      }, 2000);
    } else {
      setPage(page + 1);
    }
  };
  let currentPage = page + 1;
  const PageNum = [1, 2,3];

  const ConditionalCOmponent = () => {
    switch (page) {
      case 0:
        return (
          <div className="final-market">
            <TabSection
              tabs={tabsData}
              setYourAsset={setYourAsset}
              setOpposeAsset={setOpposeAsset}
              page={page}
              yourAsset={yourAsset}
              opposeAsset={opposeAsset}
              valid={valid}
            />
            <button
              type="button"
              className="card-btn-next"
              onClick={() => goforward()}
            >
              Next
            </button>
          </div>
        );
      case 1:
        return (
          <div className="final-market">
            <TabSection
              tabs={tabsData}
              setYourAsset={setYourAsset}
              setOpposeAsset={setOpposeAsset}
              page={page}
              yourAsset={yourAsset}
              opposeAsset={opposeAsset}
              valid={valid}
            />
            <div className="btn-container">
              <button
                type="button"
                className="back-btn"
                onClick={() => setPage(page - 1)}
              >
                Back
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={() => goforward()}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <FinalMarket
            yourAsset={yourAsset}
            opposeAsset={opposeAsset}
            page={page}
            goback={goback}
          />
        );

      default:
        return (
          <div className="final-market">
            <TabSection
              tabs={tabsData}
              setYourAsset={setYourAsset}
              setOpposeAsset={setOpposeAsset}
              page={page}
              yourAsset={yourAsset}
              opposeAsset={opposeAsset}
              valid={valid}
            />
            <button
              type="button"
              className="card-btn-next"
              onClick={() => goforward()}
            >
              Next
            </button>
          </div>
        );
    }
  };

  return (
    <ReactModal
      isOpen={isModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      portalClassName="modal"
    >
      <div className="card-header">
        <div className="mostplayed-modal">Multi-user Lot</div>
        <div onClick={() => closeModal()}>
          <img src={CloseModal} alt="close-modal" />
        </div>
      </div>
      <div className="page-num-container">
        {PageNum.map((num)=> {
               let styleName = 'page-num';

               if (num === currentPage) {
                styleName = 'page-num active';
               } else if (num < currentPage) {
                styleName = 'page-num pass';
               } else if (num > currentPage) {
                styleName= 'page-num';
               }

          return (
            <div className={`${styleName}`}>{num}</div>
          )
        })}
      </div>
      <ConditionalCOmponent />
    </ReactModal>
  );
};

export { ModalComponent };
