import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ children, isSteeps = false }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    const { innerText } = tab.target;
    setActiveTab(innerText);
  };

  return (
    <>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {children.map((child, i) => {
            const { label } = child.props;
            return (
              <Tab
                isSteeps={isSteeps}
                activeTab={activeTab}
                key={i}
                id={i}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
      </div>

      <div className={styles.tabcontent}>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child;
        })}
      </div>
    </>
  );
};
// https://www.mediafire.com/folder/0a0eyjeg5vs4y/(locuranime.com)+Hai!4-13-25
// https://www.locuranime.com/search/label/Anime%20Espa%C3%B1ol%20de%20Espa%C3%B1a?updated-max=2021-10-21T20:20:00-04:00&max-results=20&start=19&by-date=false

// www.locuranime.com
export default Tabs;

const Tab = ({ isSteeps, activeTab, label, onClick, id }) => {
  let className = styles.tablinks;
  if (activeTab === label) {
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
        <p className={styles.p}>{label}</p>
      </li>
    );
  }

  return (
    <li className={className} onClick={onClick}>
      {label}
    </li>
  );
};
