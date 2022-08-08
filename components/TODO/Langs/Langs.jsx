import { useEffect, useState, useContext } from "react";
import { getLangs } from "services/index.js";
import styles from "./Langs.module.css";
import { ThemeContext } from "context/ThemeContext";

const Langs = () => {
  const theme = useContext(ThemeContext);
  const langContext = theme.state.locale;
  const [langs, setLangs] = useState([]);

  const onClick = (lang) => {
    if (lang == "EN") {
      theme.dispatch({ type: "EN" });
    } else if (lang == "ES") {
      theme.dispatch({ type: "ES" });
    }
  };

  useEffect(() => {
    getLangs()
      .then((res) => {
        setLangs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setLangs([]);
    };
  }, []);

  return (
    <section className="header">
      <ul className="langs">
        {langs.length > 0 ? (
          langs.map((lang, key) => {
            const activeClass = lang.code === langContext ? "active" : "";
            return (
              <li key={key} className={activeClass + " list_element"}>
                <div className="link" onClick={onClick(`${lang.code}`)}>
                  {lang["translation"]}
                </div>
              </li>
            );
          })
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </section>
  );
};

export default Langs;
