import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ children, isSteeps = false }) => {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState(children[0].props.text);
  const [selectedTab] = useState();

  if (activeTab === "all" && !isSteeps) {
    return undefined;
  }

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  useEffect(() => {
    selectedTab = list.find((tab) => tab.props.text === activeTab);
  }, [activeTab]);

  useEffect(() => {
    setList(
      children.map((e) => {
        if (e.props.children) {
          return e.props.children;
        } else return e;
      })
    );
  }, []);

  return (
    <>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {list.map(
            ({ props }) =>
              console.log(props) && (
                <li
                  key={props.text}
                  className={
                    styles.tablinks + " " + isActiveClassCSS(props.text)
                  }
                  onClick={() => setActiveTab(props.text)}
                >
                  {props.text}
                </li>
              )
          )}
        </ol>
      </div>
      <div className={styles.tabcontent}>{selectedTab}</div>
    </>
  );
};

export default Tabs;
