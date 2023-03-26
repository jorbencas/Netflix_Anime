import { useMediaFile } from "@/hooks/useMediaFile";
import styles from "./Media.module.css";

export default function MediaListElement({ element }) {
  const [videoSrc] = useMediaFile(element);

  const removeElementMediaList = (id) => {
    setMedia(
      media.filter((e, i) => {
        i !== id;
      })
    );
  };

  return (
    <tr key={i}>
      <td className={styles.img_div}>
        {/* <a class="descargarfoto" href={element.urldescarga} download>
                  <i class="fas fa-cloud-download-alt"></i>
                </a> */}
        <img
          kind={element.kind}
          siglas={element.id_relative}
          name={element.name + " " + element.ext}
          src={videoSrc}
          title={element.name + " " + element.ext}
        />
      </td>
      <td>
        {element.name + " " + element.ext}
        tamaño:
        {element.filesize}
      </td>
      <td style={{ textAlign: "right" }}>
        <div classNamw={styles.buttons}>
          <div
            classNamw={styles.button}
            onClick={removeElementMediaList(element.id)}
          >
            <p>Borrar</p>
          </div>
        </div>
      </td>
    </tr>
  );
}
