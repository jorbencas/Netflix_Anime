import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ children, siglas }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    const { innerText } = tab.target;
    setActiveTab(innerText);
  };

  return (
    <>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                siglas={siglas}
                activeTab={activeTab}
                key={label}
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

export default Tabs;

const Tab = ({ siglas, activeTab, label, onClick }) => {
  let className = styles.tablinks;
  if (activeTab === label) {
    className += " " + styles.active;
  }

  if (!siglas) {
    return (
      <li className={className}>
        <div className={styles.step}>
          <div className={styles.div}></div>
          <span className={styles.span}>{item.id}</span>
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
