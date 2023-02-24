import { useMediaForm } from "@/hooks/useMediaForm";
import MediaTabs from "./MediaTabs";
import styles from "./Media.module.css";

export default function MediaForm() {
  const [
    message,
    readFile,
    clickbuttonupload,
    setMediaFiles2,
    kind,
    setKind,
    errors,
  ] = useMediaForm();

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
          onClick={clickbuttonupload}
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
          onClick={clickbuttonupload}
          className={styles.button}
        />
        {/* <i className="fas fa-file-import"></i> */}
      </div>
      <MediaTabs kind={kind} changeKind={(e) => setKind(e)} message={message} />
      <Errors errors={errors} />
    </div>
  );
}

const Errors = ({ errors }) => {
  if (errors.length == 0) return undefined;

  return (
    <section className={styles.info}>
      {errors.map((element, i) => (
        <article key={i}> {element}</article>
      ))}
    </section>
  );
};
