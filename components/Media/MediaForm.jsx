import { useMediaForm } from "@/hooks/useMediaForm";
import MediaTabs from "./MediaTabs";
import styles from "./Media.module.css";

export default function MediaForm() {
  const [readFile, readUrl, k, kind, setKind, errors] = useMediaForm();

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
      </div>
      <div className={styles.buttons}>
        <input
          className={styles.text}
          onChange={(e) => readUrl(e.target.value)}
          type="url"
          accept="image/png, .jpeg, .jpg, image/gif, .mp4, .webm"
        />
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
  return (
    <section className={styles.info + " " + styles.errores}>
      {errors.map((element, i) => (
        <article key={i}>{element}</article>
      ))}
    </section>
  );
};
