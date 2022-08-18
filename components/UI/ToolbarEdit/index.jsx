import styles from "./ToolbarEdit.module.css";

const ToolbarEdit = () => {
  return (
    <>
      <div className={styles.toolbar}>
        <ul className={styles.tab}>
          <li className={styles.tablink + " " + styles.active} tab="anime">
            Anime
          </li>
          <li className={styles.tablink} tab="episodes">
            Episodes
          </li>
          <li className={styles.tablink} tab="opening">
            Openings
          </li>
          <li className={styles.tablink} tab="endings">
            Endings
          </li>
        </ul>
      </div>
    </>
  );
};

export default ToolbarEdit;
