import styles from "./Media.module.css";

export default function MediaList({ mediaList, removeElementMediaList }) {
  if (mediaList.length == 0) {
    return (
      <div className={styles.sortableupload + " " + styles.cursorDefault}>
        <div className={styles.sinID}>
          <div>Para agregar archivos debe antes guardar el contenido.</div>
        </div>
      </div>
    );
  } else {
    console.log("====================================");
    console.log(mediaList);
    console.log("====================================");
  }

  return (
    <div className={styles.sortableupload + " " + styles.cursorPointer}>
      <table className={styles.table} borde="0">
        <tbody>
          {mediaList.map((element, i) => {
            return (
              <tr key={i}>
                <td className={styles.img_div}>
                  {/* <a class="descargarfoto" href={element.urldescarga} download>
                  <i class="fas fa-cloud-download-alt"></i>
                </a> */}
                  <img
                    kind={element.kind}
                    siglas={element.id_relative}
                    name={element.name + " " + element.extension}
                    src={element.urlarchivo}
                    title={element.name + " " + element.extension}
                  />
                </td>
                <td>
                  {element.name + " " + element.extension}
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
          })}
        </tbody>
      </table>
    </div>
  );
}
