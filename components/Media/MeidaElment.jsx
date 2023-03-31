import { useMediaFile } from "@/hooks/useMediaFile";
import styles from "./Media.module.css";
import { MediaContext } from "@/context/Media";
import { useContext } from "react";

export default function MediaListElement({ filePath, i }) {
  const [videoSrc, element] = useMediaFile(filePath);
  const { media, setMedia } = useContext(MediaContext);
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
        {/* <a
          href={element.urlarchivo}
          download
          name={element.nombre + " " + element.extension}
        >
          d
        </a> */}
        <img
          kind={element.kind}
          siglas={element.id_relative}
          name={element.nombre + " " + element.extension}
          src={videoSrc}
          title={element.nombre + " " + element.extension}
        />
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
            onClick={() => removeElementMediaList(element.id)}
          >
            <p>Borrar</p>
          </div>
        </div>
      </td>
    </tr>
  );
}
