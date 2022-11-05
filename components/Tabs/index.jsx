import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ labels, isSteeps = false }) => {
  const [activeTab, setActiveTab] = useState(labels.indexOf(labels.shift()));

  return (
    <>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {console.log(labels) &&
            labels.map((label, i) => {
              return (
                <Tab
                  isSteeps={isSteeps}
                  activeTab={activeTab}
                  key={i}
                  id={i}
                  label={label}
                  onClick={(tab) => setActiveTab(tab.target.id)}
                />
              );
            })}
        </ol>
      </div>

      <div className={styles.tabcontent}>
        {labels.map((child, i) => {
          if (i !== activeTab || (activeTab == 5 && isSteeps)) return undefined;
          else if (activ) return child.component;
        })}
      </div>
    </>
  );
};

export default Tabs;

const Tab = ({ isSteeps, activeTab, label, onClick, id }) => {
  let className = styles.tablinks;
  if (activeTab === label.text) {
    className += " " + styles.active;
  }

  if (isSteeps) {
    return (
      <li className={className}>
        <div className={styles.step}>
          <div className={styles.div}></div>
          <span className={styles.span}>{id + 1}</span>
          <div className={styles.div}></div>
        </div>
        <p className={styles.p}>{label.text}</p>
      </li>
    );
  }

  return (
    <li className={className} onClick={onClick}>
      {label.text}
    </li>
  );
};
