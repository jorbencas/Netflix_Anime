import styles from "./Media.module.css";

export default function MediaTabs({ kind, changeKind, message }) {
  if (kind !== "anime") {
    return <div className={styles.messagesupload}>{message}</div>;
  }
  console.info("====================================");
  console.info(kind);
  console.info("====================================");
  return (
    <ul className={styles.tab}>
      <input
        type="radio"
        value="banner"
        className={styles.checkbox + " " + styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <input
        type="radio"
        value="portada"
        className={styles.checkbox + " " + styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <div className={styles.messagesupload}>{message}</div>
    </ul>
  );
}
