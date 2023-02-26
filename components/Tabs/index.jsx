import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { useSiglas } from "@/hooks/useSiglas";
import EditAnime from "@/components/EditAnime";

const Tabs = ({ children }) => {
  const [state, setState] = useState({
    list: [],
    activeTab: "",
  });
  const { list, activeTab, selectedTab } = state;
  //const { siglasPage } = useSiglas();
  // if (activeTab === "all" && !siglasPage) {
  //   return undefined;
  // }

  const isActiveClassCSS = (label) => {
    return activeTab === label ? styles.active : "";
  };

  const setActiveTab = (activeTab) => {
    let s = { ...state };
    s.activeTab = activeTab;
    setState(s);
  };

  useEffect(() => {
    let l = [];
    l = [...l, ...inflateTabs(children)];
    let s = { ...state };
    s.list = l;
    s.activeTab = l[0].props.text;
    setState(s);
  }, []);

  const inflateTabs = (element) => {
    let l = [];
    if (element?.props == null || element.props == undefined) {
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
        {list.map((tab) => tab.props.text === activeTab)}
      </div>
    </>
  );
};

export default Tabs;
