import styles from "./Media.module.css";

export default function MediaList({ mediaList, removeElementMediaList }) {
  // const deletefile = (id) => {};
  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     setSuccess(false);
  //     setContent(
  //       <div>Eliminando archivos...</div>
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  return (
    <table className={styles.table} borde="0">
      {mediaList.map((element, i) => {
        <tr key={i}>
          <td class="img_div">
            <a class="descargarfoto" href={element.urldescarga} download>
              <i class="fas fa-cloud-download-alt"></i>
            </a>
            <img
              type={element.type}
              kind={element.kind}
              id_relative={element.id_relative}
              siglas={element.siglas}
              idioma={element.idiomas}
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
          <td style="text-align:right;">
            <div class="buttons">
              <div class="button" onclick={removeElementMediaList(element.id)}>
                <i class="fa fa-trash" style="font-size:20px;"></i>
              </div>
            </div>
          </td>
        </tr>;
      })}
    </table>
  );
}
