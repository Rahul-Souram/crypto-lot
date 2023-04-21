import React, { useState } from "react";
import SlideOne from "../components/SlideOne";

// Define the interface for the Tab
interface Tab {
  title: string;
  content: any;
}
// Define the Tabs component
export const TabSection = ({
  tabs,
  setOpposeAsset,
  setYourAsset,
  page,
  yourAsset,
  opposeAsset,
  valid,
}: {
  tabs: Tab[];
  page: any;
  setOpposeAsset: any;
  setYourAsset: any;
  yourAsset: any;
  opposeAsset: any;
  valid: any;
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="heading-market">
        {page === 0 ? "Choose Your Asset" : "Choose Opposing Asset"}
      </div>
      <div className="search-container">
        <div className="search-icon"></div>
        <input type="text" placeholder="Search Token eg. ETH, Gold etc" className="search-input"/>
      </div>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTabIndex === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      {valid && <div className="heading-market">please select</div>}
      <div className="tabs-content">
        <SlideOne
          setOpposeAsset={setOpposeAsset}
          setYourAsset={setYourAsset}
          page={page}
          content={tabs[activeTabIndex].content}
          yourAsset={yourAsset}
          opposeAsset={opposeAsset}
        />
      </div>
    </div>
  );
};
