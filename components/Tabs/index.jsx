import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { useSiglas } from "@/hooks/useSiglas";

const Tabs = ({ children }) => {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState(children[0].props.text);
  const [selectedTab, setSelectedTab] = useState();
  const { siglas } = useSiglas();
  // if (activeTab === "all" && !siglas) {
  //   return undefined;
  // }

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  useEffect(() => {
    setSelectedTab(list.find((tab) => tab.props.text === activeTab));
  }, [activeTab]);

  useEffect(() => {
    let l = [];
    children.forEach((e) => {
      if (e.props.children) {
        l = [...l, ...e.props.children];
      } else l.push(e);
    });
    setList(l);
    setSelectedTab(l.find(({ props }) => props.text === activeTab));
  }, []);

  return (
    <>
      <div className={styles.toolbar}>
        <ol className={styles.tab}>
          {list.map(({ props }) => (
            <li
              key={props.text}
              className={styles.tablinks + " " + isActiveClassCSS(props.text)}
              onClick={() => setActiveTab(props.text)}
            >
              {props.text}
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.tabcontent}>{selectedTab}</div>
    </>
  );
};

export default Tabs;
