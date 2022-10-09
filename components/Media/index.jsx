import styles from "./Media.module.css";
import Modal from "@/components/Modal";
import { useMedia } from "@/hooks/useMedia";
import MediaForm from "./MediaForm";
import MediaList from "./MediaList";

export default function Media({ media, changeMedia, kind, id_external }) {
  const [addElementMediaList, removeElementMediaList] = useMedia(
    media,
    changeMedia
  );

  return (
    <div className={styles.upload}>
      <MediaList
        mediaList={media}
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
