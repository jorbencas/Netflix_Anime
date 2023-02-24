import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import MediaForm from "./MediaForm";
import MediaListElement from "./MeidaElment";
import { useContext } from "react";
import { MediaContext } from "@/context/Media";
export default function Media() {
  const { media } = useContext(MediaContext);
  console.log("====================================");
  console.log(media);
  console.log("====================================");

  return (
    <div className={styles.upload}>
      <div className={styles.sortableupload + " " + styles.cursorPointer}>
        {media.lenght == 0 ? (
          <div className={styles.sinID}>
            <div>Para agregar archivos debe antes guardar el contenido. </div>
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
