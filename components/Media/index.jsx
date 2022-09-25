import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import { useMedia } from "@/hooks/useMedia";
import MediaForm from "./MediaForm";
import MediaList from "./MediaList";

export default function Media({ media, kind, id_external }) {
  const [
    mediaList,
    addElementMediaList,
    removeElementMediaList,
  ] = useMedia(media);

  return (
    <div className={styles.upload}>
      <MediaList
        mediaList={mediaList}
        removeElementMediaList={removeElementMediaList}
      />
      <div className={styles.buttons}>
        <Modal btnLabel="Añadir archivos">
          <MediaForm
            kind={kind}
            id_external={id_external}
            addElementMediaList={addElementMediaList}
          />
        </Modal>
      </div>
    </div>
  );
}
