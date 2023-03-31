import { useMediaForm } from "@/hooks/useMediaForm";
import MediaTabs from "./MediaTabs";
import styles from "./Media.module.css";
import { useEffect } from "react";

export default function MediaForm() {
  const [readFile, clickbuttonupload, readUrl, k, kind, setKind, errors] =
    useMediaForm();
      useEffect(() => {
        console.log("Hola");
      }, []);

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
          onChange={(e) => readUrl(e.target.value)}
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
      {k === "animes" && (
        <MediaTabs kind={kind} changeKind={(e) => setKind(e)} />
      )}
      <Errors errors={errors} />
    </div>
  );
}

const Errors = ({ errors }) => {
  if (errors.length == 0) return "";
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <section className={styles.info + " " + styles.errores}>
      {errors.map((element, i) => (
        <article key={i}>{element}</article>
      ))}
    </section>
  );
};
