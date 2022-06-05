import { useEffect, useState } from "react";
import { getLangs } from "../../services/index.js";
import "./Langs.css";

const Langs = () => {
  const [langs, setLangs] = useState([]);

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
            const activeClass = lang.code === "es" ? "active" : "";
            return (
              <li key={key} className={activeClass + " list_element"}>
                <a className="link" href={lang.code}>
                  {lang["translation"]}
                </a>
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
