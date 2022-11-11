import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ labels, isSteeps = false }) => {
  const [activeTab, setActiveTab] = useState(labels[0].text);
  const selectedTab = labels.find((tab) => tab.text === activeTab);

  if (activeTab === "all" && !isSteeps) {
    return undefined;
  }

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  return (
    <div key={labels.text}>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {labels.map(({ text }) => {
            return (
              <li
                key={text}
                className={styles.tablinks + " " + isActiveClassCSS(text)}
                onClick={() => setActiveTab(text)}
              >
                {text}
              </li>
            );
          })}
        </ol>
      </div>
      <div className={styles.tabcontent}>{selectedTab?.component}</div>
    </div>
  );
};

export default Tabs;
