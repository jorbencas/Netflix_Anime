import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { useSiglas } from "@/hooks/useSiglas";

const Tabs = ({ children }) => {
  const [state, setState] = useState({
    list: [],
    activeTab: "",
  });
  const { list, activeTab } = state;
  /*const [ siglas ] = useSiglas();
  if (activeTab === "all" && !siglas) {
    return undefined;
  }*/

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  const setActiveTab = (tab) => {
    let s = { ...state };
    s.activeTab = tab;
    setState(s);
  };

  useEffect(() => {
    let l = inflateTabs(children);
    let s = { ...state };
    s.list = l;
    s.activeTab = l[0].props.text;
    setState(s);
  }, []);

  const inflateTabs = (element) => {
    let l = [];
    if (!element.props) {
      element.forEach((e) => {
        l = [...l, ...inflateTabs(e)];
      });
    } else if (element?.props?.children) {
      l = [...l, ...inflateTabs(element.props.children)];
    } else if (element?.props?.text) {
      l.push(element);
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
      <div className={styles.tabcontent}>
        {list.filter((tab) => tab.props.text === activeTab)}
      </div>
    </>
  );
};

export default Tabs;
