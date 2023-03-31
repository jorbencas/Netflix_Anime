import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import MediaForm from "./MediaForm";
import MediaListElement from "./MeidaElment";
import { useContext } from "react";
import { MediaContext } from "@/context/Media";
import { useSiglas } from "@/hooks/useSiglas";

export default function Media() {
  const { media } = useContext(MediaContext);
  const [siglas, siglasPage] = useSiglas();
  return (
    <div className={styles.upload}>
      <div className={styles.sortableupload + " " + styles.cursorPointer}>
        {media.length > 0 ? (
          <table className={styles.table} borde="0">
            <tbody>
              {media.map((element, i) => {
                return (
                  <MediaListElement filePath={element} key={element.id} i={i} />
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className={styles.sinID}>
            <div>No hay contenido.{siglasPage}</div>
          </div>
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