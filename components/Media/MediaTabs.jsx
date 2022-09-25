import styles from "./Media.module.css";

export default function MediaTabs({ kind, changeKind, message }) {
  if (kind !== "animes") {
    return <div className={styles.messagesupload}>{message}</div>;
  }
  return (
    <>
      <input
        type="radio"
        value="banner"
        name="kind"
        id="banner"
        className={styles.radio}
        onChange={(e) => changeKind(e.target.value)}
      />
      <label className={styles.label} htmlFor="banner">
        banner
      </label>

      <input
        type="radio"
        value="portada"
        name="kind"
        id="portada"
        className={styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />

      <label className={styles.label} htmlFor="portada">
        portada
      </label>

      <div className={styles.messagesupload}>{message}</div>
    </>
  );
}
