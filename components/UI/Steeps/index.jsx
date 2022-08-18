import { useState } from "react";
import styles from "./Steeps.module.css";

function Steeps() {
  const [steeps, setSteeps] = useState([
    {
      id: 1,
      name: "Steeps",
      class: "anime",
      translate: "list_anime",
    },
    {
      id: 2,
      class: "episodes",
      translate: "anime_detail_list_episode",
    },
    {
      id: 3,
      class: "openings",
      translate: "anime_detail_list_openings",
    },
    {
      id: 4,
      class: "endings",
      translate: "anime_detail_list_endings",
    },
    {
      id: 5,
      class: "all",
      translate: "end",
    },
  ]);

  return (
    <ul className={styles.steps}>
      {steeps.map((item, i) => {
        return (
          <li
            key={i}
            className={
              i == 0
                ? styles.active +
                  " " +
                  styles.content +
                  " " +
                  styles[item.class]
                : styles.content + " " + styles[item.class]
            }
          >
            <div className={styles.step}>
              <div className={styles.div}></div>
              <span className={styles.span}>{item.id}</span>
              <div className={styles.div}></div>
            </div>
            <p className={styles.p}>{item.translate}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Steeps;
