import styles from "../EditAnime/EditAnime.module.css";

function ImputKindsFilters({ type, changeKing, label, value, ischecked, i }) {
  return (
    <>
      <input
        type={type}
        className={styles.checkbox}
        id={i}
        checked={ischecked}
        onChange={(e) => changeKing(e.target)}
        value={value}
      />

      <label className={styles.label} htmlFor={i}>
        {label}
      </label>
    </>
  );
}
export default ImputKindsFilters;
