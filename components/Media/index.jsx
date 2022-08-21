import { useEffect, useState } from "react";
import styles from "./Media.module.css";
import Modal from "@/components/Modal";

export default function Media({ media, params }) {
  const [content, setContent] = useState(
    `<div className=${styles.sinID}> <div>Para agregar archivos debe antes guardar el contenido.</div> </div>`
  );
  const { mediaFiles, setMediaFiles } = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [mediaList, setMediaList] = useState("");
  const [cursorStyles, setcursorStyles] = useState(styles.cursorDefault);
  const [tabs, setTabs] = useState(
    `<div className=${styles.messagesupload}>${message}</div>`
  );

  useEffect(() => {
    if (media.lenght > 0) {
      setContent("");
      setMediaList(media);
      setcursorStyles(styles.cursorPointer);
    } else {
      setContent(
        `<div className=${styles.sinID}> <div>Para agregar archivos debe antes guardar el contenido.</div> </div>`
      );
      setcursorStyles(styles.cursorDefault);
    }

    if (params?.kind == "anime") {
      setTabs(`<ul className={styles.tab}>
            <div class="tablinks active" valor='banner' onclick="setanime('banner');"><i class="fas fa-images" style="color:var(--color-text);">&nbsp; B</i></div>
            <div class="tablinks" valor='portada' onclick="setanime('portada');"><i class="fas fa-image" style="color:var(--color-text);">&nbsp; P</i></div>
            <div className={styles.messagesupload}>${message}</div>
        </ul>`);
    }
  }, []);

  function readMore() {
    var files = mediaFiles;
    var fileSize_total = 0;
    for (var i = 0; i < files.lenght; i++) {
      //obtenemos un array con los datos del archivo
      var file = files[i];
      //obtenemos el nombre del archivo
      var fileName = file.name;
      //obtenemos la extensión del archivo
      var fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
      //obtenemos el tamaño del archivo
      var fileSize = file.size;
      //obtenemos el tipo de archivo image/png ejemplo
      var fileType = file.type;
      //mensaje con la información del archivo
      if (!isImage(fileExtension) && !isVideo(fileExtension)) {
        setLoading(true);
        setError(true);
        setSuccess(false);
        setMessage(
          "<span className={styles.'info'>Nombre de extensión (" +
            fileExtension +
            ") no valido</span>"
        );
        break;
      } else if (fileName.split(".").lenght > 2) {
        setLoading(true);
        setError(true);
        setSuccess(false);
        setMessage(
          "<span className={styles.info}>Solo se permite un punto (.) en el nombre</span>"
        );
        break;
      } else if (params.siglas.value.lenght < 3) {
        setLoading(true);
        setError(true);
        setSuccess(false);
        setMessage(
          "<span className={styles.'info'>Debes de introducir la ssiglas del anime, personage, episodio... antes de poder subrir cualquier fichero multimedia.</span>"
        );
        break;
      } else {
        fileSize_total += fileSize;
        setLoading(false);
        setError(false);
        setSuccess(true);
        setMessage(
          "<span className={styles.'info'> " +
            files.lenght +
            " archivos para subir, peso total: " +
            Math.round((fileSize_total / 1024 / 1024) * 100) / 100 +
            " Mbytes.</span>"
        );
      }
    }
  }

  const clickbuttonupload = (option) => {
    if (option == "subir") {
      //hay archivo seleccionada?
      if (success) {
        sendajax(option);
      } else {
        setTabs(
          "<span className={styles.messagesupload}>Vuelva a seleccionar algún archivo</span>"
        );
      }
    } else if (option == "importar") {
      //   var namefileimport = mediaFiles;
      //   var namefileimport_array = namefileimport?.split(".");
      //   if (namefileimport == "") {
      //     setTabs("<span className={styles.messagesupload}>URL no válida</span>");
      //   } else if (
      //     !isImage(namefileimport_array[namefileimport_array?.lenght - 1]) &&
      //     !isVideo(namefileimport_array[namefileimport_array?.lenght - 1])
      //   ) {
      //     setMessage(
      //       "<span className={styles.'info'>Nombre de extensión (" +
      //         namefileimport_array[namefileimport_array?.lenght - 1] +
      //         ") no valido</span>"
      //     );
      //   } else {
      //     sendajax(option);
      //   }
    }
    setLoading(true);
    setError(false);
    setSuccess(false);
    setContent(`<div className=${styles.sinID}> <div>Cargando...</div> </div>`);
    setcursorStyles(styles.cursorDefault);
  };

  function isImage(extension) {
    extension = extension.toLowerCase();
    switch (extension) {
      case "jpg":
      case "gif":
      case "png":
      case "jpeg":
        return true;
        break;
      default:
        return false;
        break;
    }
  }

  function isVideo(extension) {
    extension = extension.toLowerCase();
    switch (extension) {
      case "mp4":
      case "avi":
      case "webm":
      case "mkv":
      case "flv":
        return true;
        break;
      default:
        return false;
        break;
    }
  }

  //   const handleError = (e) => {
  //     e.preventDefault();
  //     setLoading(false);
  //     setError(true);
  //     setSuccess(false);
  //     setContent(
  //       `<div className=${styles.sinID}> <div>Error al cargar los archivos.</div> </div>`
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  //   const handleSuccess = (e) => {
  //     e.preventDefault();
  //     setLoading(false);
  //     setError(false);
  //     setSuccess(true);
  //     setContent(
  //       `<div className=${styles.sinID}> <div>Archivos cargados correctamente.</div> </div>`
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     setLoading(false);
  //     setError(false);
  //     setSuccess(false);
  //     setContent(
  //       `<div className=${styles.sinID}> <div>Eliminando archivos...</div> </div>`
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  return (
    <div className={styles.upload}>
      {content}
      <div className={styles.sortableupload + cursorStyles}>
        <table borde="0">{mediaList}</table>
      </div>
      <div className={styles.buttons}>
        <Modal btnLabel="Añadir archivos">
          <div className={styles.formpopupupdate + styles.upload}>
            <form className={styles.formulario} enctype="multipart/form-data">
              <div className={styles.buttons} id="uploadimagensubir">
                <input
                  className={styles.text}
                  name="mediaFiles[]"
                  type="file"
                  onChange={() => readMore()}
                  accept="image/png, .jpeg, .jpg, image/gif, .mp4, .avi, .webm, .mkv, .flv"
                  multiple
                />
                <div
                  className={styles.button}
                  onclick={() => clickbuttonupload("subir")}
                >
                  {" "}
                  <i class="fas fa-cloud-upload-alt"></i>
                </div>
              </div>

              <div className={styles.buttons} id="uploadimagenimportar">
                <input
                  className={styles.text}
                  onChange={() => readMore()}
                  name="mediaFiles[]"
                  type="url"
                  accept="image/png, .jpeg, .jpg, image/gif, .mp4, .avi, .webm, .mkv, .flv"
                />
                <div
                  className={styles.button}
                  onclick={() => clickbuttonupload("importar")}
                >
                  <i class="fas fa-file-import"></i>
                </div>
              </div>
              {tabs}
              <input name="sizeminH" value="300" type="hidden" />
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}
