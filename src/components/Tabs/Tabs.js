import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs, defaultTab = 0, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // التأكد من أن children هو array
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {childrenArray[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;

