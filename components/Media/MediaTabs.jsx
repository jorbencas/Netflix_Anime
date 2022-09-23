import styles from "./Media.module.css";

export default function MediaTabs({ kind, changeKind, message }) {
  if (kind !== "animes") {
    return <div className={styles.messagesupload}>{message}</div>;
  }
  return (
    <ul className={styles.tab}>
      <input
        type="radio"
        value="banner"
        name="kind"
        className={styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <input
        type="radio"
        value="portada"
        name="kind"
        className={styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <div className={styles.messagesupload}>{message}</div>
    </ul>
  );
}
