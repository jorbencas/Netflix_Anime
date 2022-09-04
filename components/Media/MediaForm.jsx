import { useMediaForm } from "@/hooks/useMediaForm";
import MediaTabs from "./MediaTabs";
import styles from "./Media.module.css";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

export default function MediaForm({
  siglas,
  kind,
  changeContent,
  changeCursorStyles,
  addElementMediaList,
}) {
  const [setOpen] = useContext(ModalContext);
  const [
    message,
    readFile,
    clickbuttonupload,
    setMediaFiles2,
    setKind,
    errors,
  ] = useMediaForm(
    siglas,
    changeContent,
    changeCursorStyles,
    addElementMediaList,
    setOpen
  );

  return (
    <div className={styles.upload}>
      <div className={styles.buttons}>
        <input
          className={styles.text}
          onChange={(e) => readFile(e.target.files)}
          type="file"
          accept="image/png, .jpeg, .jpg, image/gif, .mp4, .webm"
          multiple
        />

        <input
          type="button"
          value="Subir"
          onClick={() => clickbuttonupload("subir")}
          className={styles.button}
        />
        {/* <i className="fas fa-cloud-upload-alt"></i> */}
      </div>

      <div className={styles.buttons}>
        <input
          className={styles.text}
          onChange={(e) => setMediaFiles2(e.target.value)}
          type="url"
          accept="image/png, .jpeg, .jpg, image/gif, .mp4, .webm"
        />
        <input
          type="button"
          value="Importar"
          onClick={() => clickbuttonupload("importar")}
          className={styles.button}
        />
        {/* <i className="fas fa-file-import"></i> */}
      </div>
      <MediaTabs kind={kind} changeKind={(e) => setKind(e)} message={message} />
      {errors.lenght > 0 ? (
        <section className={styles.info}>
          {errors.map((element, i) => {
            <article key={i}> {element}</article>;
          })}
        </section>
      ) : null}
    </div>
  );
}
