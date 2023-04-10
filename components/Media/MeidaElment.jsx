import { useMediaFile } from "@/hooks/useMediaFile";
import styles from "./Media.module.css";
import { MediaContext } from "@/context/Media";
import { useContext } from "react";
import VideoTest from "@/components/VideoTest";

export default function MediaListElement({ filePath }) {
  const [videoSrc, element] = useMediaFile(filePath);
  const { media, setMedia } = useContext(MediaContext);
  const removeElement = (idRemove) => {
    let eleme = media.filter(({ id }) => id !== idRemove);
    setMedia(eleme);
  };

  return (
    <tr>
      <td className={styles.img_div}>
        {/* <a
          href={element.urlarchivo}
          download
          name={element.nombre + " " + element.extension}
        >
          d
        </a> */}
        {element.extension === "mp4" ? (
          <video
            controls
            data-kind={element.kind}
            data-siglas={element.id_relative}
            name={element.nombre + " " + element.extension}
            src={videoSrc}
            title={element.nombre + " " + element.extension}
          />
        ) : (
          // <VideoTest videoSrc={videoSrc} />
          <img
            data-kind={element.kind}
            data-siglas={element.id_relative}
            name={element.nombre + " " + element.extension}
            src={videoSrc}
            title={element.nombre + " " + element.extension}
          />
        )}
      </td>
      <td>
        {element.nombre + " " + element.extension}
        tamaño:
        {element.filesize}
      </td>
      <td style={{ textAlign: "right" }}>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => removeElement(element.id)}
          >
            <p>Borrar</p>
          </div>
        </div>
      </td>
    </tr>
  );
}
