import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import { useMedia } from "@/hooks/useMedia";
import MediaForm from "./MediaForm";
import MediaList from "./MediaList";

export default function Media({ media, kind, id_external }) {
  const [
    content,
    mediaList,
    cursorStyles,
    addElementMediaList,
    removeElementMediaList,
    changeContent,
    changeCursorStyles,
  ] = useMedia(media);

  return (
    <div className={styles.upload}>
      <div className={styles.sinID}>{content}</div>
      <div className={styles.sortableupload + " " + styles[cursorStyles]}>
        <MediaList
          mediaList={mediaList}
          removeElementMediaList={removeElementMediaList}
        />
      </div>
      <div className={styles.buttons}>
        <Modal btnLabel="Añadir archivos">
          <MediaForm
            kind={kind}
            id_external={id_external}
            addElementMediaList={addElementMediaList}
            changeContent={changeContent}
            changeCursorStyles={changeCursorStyles}
          />
        </Modal>
      </div>
    </div>
  );
}
