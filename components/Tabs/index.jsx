import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { useSiglas } from "@/hooks/useSiglas";

const Tabs = ({ children }) => {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState();
  const [selectedTab, setSelectedTab] = useState();
  //const { siglasPage } = useSiglas();
  // if (activeTab === "all" && !siglasPage) {
  //   return undefined;
  // }

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  useEffect(() => {
    if (typeof activeTab !== "undefined") {
      let ele = list.find((tab) => tab.props.text === activeTab);
      console.log(ele);
      setSelectedTab(ele);
    }
  }, [activeTab]);

  useEffect(() => {
    let l = [];
    l = [...l, ...inflateTabs(children)];
    setList(l);
    setActiveTab(l[0].props.text);
  }, []);

  const inflateTabs = (element) => {
    let l = [];
    if (typeof element == "Array") {
      element.forEach((e) => {
        if (e.props.children) {
          debugger;
          l = [...l, ...inflateTabs(e.props.children)];
        }
      });
    } else if (element?.props?.text) {
      l.push(element);
    } else if (element?.props?.children) {
      l = [...l, ...inflateTabs(element.props.children)];
      debugger;
    }
    return l;
  };

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
