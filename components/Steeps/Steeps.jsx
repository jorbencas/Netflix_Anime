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
      name: "Steeps",
      class: "episodes",
      translate: "anime_detail_list_episode",
    },
    {
      id: 3,
      name: "Steeps",
      class: "openings",
      translate: "anime_detail_list_openings",
    },
    {
      id: 4,
      name: "Steeps",
      class: "endings",
      translate: "anime_detail_list_endings",
    },
    {
      id: 5,
      name: "Steeps",
      class: "all",
      translate: "end",
    },
  ]);

  return (
    <section className={styles.steps}>
      {steeps.map((item, i) => {
        return (
          <div
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
            <article className={styles.step}>
              <div className={styles.div}></div>
              <span className={styles.span}>{item.id}</span>
              <div className={styles.div}></div>
            </article>
            <p className={styles.p}>{item.translate}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Steeps;
