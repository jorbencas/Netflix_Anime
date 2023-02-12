import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import MediaForm from "./MediaForm";
import MediaListElement from "./MeidaElment";
import { MediaContext } from "@/context/Media";
import { useContext } from "react";

export default function Media() {
  const { media } = useContext(MediaContext);
  return (
    <div className={styles.upload}>
      <div className={styles.sortableupload + " " + styles.cursorPointer}>
        {media.length == 0 ? (
          <div className={styles.sinID}>
            <div>Para agregar archivos debe antes guardar el contenido.</div>
          </div>
        ) : (
          <table className={styles.table} borde="0">
            <tbody>
              {media.map((element, i) => {
                <MediaListElement element={element} />;
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.buttons}>
        <Modal btnLabel="Añadir archivos">
          <MediaForm />
        </Modal>
      </div>
    </div>
  );
}
