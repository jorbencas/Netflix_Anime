import styles from "./LateralBar.module.css";

const LateralBar = () => {
  return (
    <>
      <div className={styles.lateralbar}>
        <div className={styles.icons}>
          <div className={styles.element}>
            <p>plus</p>
          </div>
          <div className={styles.element}>
            <p>plus</p>
          </div>
          <div className={styles.element}>
            <p>plus</p>
          </div>
          <div className={styles.element}>
            <p>plus</p>
          </div>
          <div className={styles.element}>
            <p>plus</p>
          </div>
        </div>
        <div className={styles.sidenav}>
          <a className={styles.element}>
            <span>Editar</span>
          </a>
          <a className={styles.element}>
            <span>Usuarios</span>
          </a>
          <a className={styles.element}>
            <span>Backup</span>
          </a>
          <a className={styles.element}>
            <span>Archivos</span>
          </a>
          <a className={styles.element}>
            <span>Errores</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LateralBar;
