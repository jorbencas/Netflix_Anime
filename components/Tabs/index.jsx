import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { useSiglas } from "@/hooks/useSiglas";

const Tabs = ({ children }) => {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState();
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
    console.log("====================================");
    console.log(children);
    console.log("====================================");
    let ELEMENTS = inflateTabs(children);
    [...l, ...ELEMENTS];
    setList(l);

    setActiveTab(l[0].props.text);
  }, []);

  const inflateTabs = (element) => {
    let l = [];
    console.log("FUFUFUFUFUFUFUFUFUFUFUUFUFUFUFUFUFUUF");
    console.log(typeof element);
    if (typeof element === "object") {
      if (element?.props?.children && !element?.props?.text) {
        let ele = inflateTabs(element.props.children);
        console.log(typeof ele);

        [...l, ...ele];
      } else {
        l.push(element);
      }
    } else {
      element.forEach((e) => {
        if (e.props.children) {
          let ele = inflateTabs(e.props.children);
          console.log(typeof ele);

          [...l, ...ele];
        } else l.push(e);
      });
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
