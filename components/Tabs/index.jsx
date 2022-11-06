import { useEffect, useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ labels, isSteeps = false }) => {
  const [activeTab, setActiveTab] = useState(labels[0].text);
  const selectedTab = labels.find((tab) => tab.text === activeTab);

  if (activeTab === "all" && !isSteeps) {
    return undefined;
  }

  return (
    <div key={labels.text}>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {labels.map((label, i) => {
            return (
              <Tab
                activeTab={activeTab}
                key={i}
                label={label.text}
                onClick={(tab) => setActiveTab(tab.target.id)}
              />
            );
          })}
        </ol>
      </div>
      <div className={styles.tabcontent}>{selectedTab?.component}</div>
    </div>
  );
};

export default Tabs;

const Tab = ({ activeTab, label, onClick }) => {
  let className = styles.tablinks;
  if (activeTab === label) {
    className += " " + styles.active;
  }

  return (
    <li className={className} id={label} onClick={onClick}>
      {label}
    </li>
  );
};
