import { useEffect, useState, useContext } from "react";
import styles from "./Media.module.css";
import Modal from "@/components/Modal";
// import { useForm } from "react-hook-form";
import { ModalContext } from "@/context/ModalContext";

export default function Media({ media, props }) {
  const [content, setContent] = useState(
    <div>Para agregar archivos debe antes guardar el contenido.</div>
  );
  const [mediaList, setMediaList] = useState([]);
  const [cursorStyles, setcursorStyles] = useState(styles.cursorDefault);

  useEffect(() => {
    if (media) {
      setContent("");
      setcursorStyles(styles.cursorPointer);
    } else {
      console.log(media);
      // setContent("");
      // setcursorStyles(styles.cursorDefault);
    }
  }, []);

  function isImage(extension) {
    let valids = ["jpg", "jpeg", "png", "gif", "bmp"];
    return valids.includes(extension.toLowerCase());
  }

  function isVideo(extension) {
    return extension.toLowerCase() == "mp4" ? true : false;
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
  //     setSuccess(true);
  //     setContent(
  //       `<div className=${styles.sinID}> <div>Archivos cargados correctamente.</div> </div>`
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     setSuccess(false);
  //     setContent(
  //       <div>Eliminando archivos...</div>
  //     );
  //     setcursorStyles(styles.cursorDefault);
  //   };

  return (
    <div className={styles.upload}>
      <div className={styles.sinID}>{content}</div>
      <div className={styles.sortableupload + " " + cursorStyles}>
        {mediaList.lenght > 0 ? (
          <table className={styles.table} borde="0">
            {mediaList.map((element, i) => {
              <MediaElement
                key={i}
                element={element}
                mediaList={mediaList}
                changeMediaList={(e) => setMediaList(e)}
              />;
            })}
          </table>
        ) : (
          props?.siglas
        )}
      </div>
      <div className={styles.buttons}>
        <Modal btnLabel="Añadir archivos">
          <MediaForm
            isVideo={isVideo}
            isImage={isImage}
            props={props}
            mediaList={mediaList}
            changeContent={(e) => setContent(e)}
            changeCursorStyles={(e) => setcursorStyles(e)}
            changeMediaList={(e) => setMediaList(e)}
          />
        </Modal>
      </div>
    </div>
  );
}

const MediaForm = ({
  isVideo,
  isImage,
  props,
  mediaList,
  changeContent,
  changeCursorStyles,
  changeMediaList,
}) => {
  const [setOpen] = useContext(ModalContext);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [mediaFiles2, setMediaFiles2] = useState([]);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [kind, setKind] = useState("");
  const [message, setMessage] = useState("");

  const readFile = (e) => {
    setMediaFiles(e);
    if (props?.siglas.lenght < 3) {
      errors.push(
        <p>
          Debes de introducir la ssiglas del anime, episodio... antes de poder
          subrir cualquier fichero multimedia.
        </p>
      );
    } else if (e.lenght > 0) {
      var fileSize_total = 0;
      e.forEach((file) => {
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
          errors.push(<p>Nombre de extensión {fileExtension} no valido</p>);
        } else if (fileName.split(".").lenght > 2) {
          errors.push(<p>Solo se permite un punto (.) en el nombre</p>);
        } else {
          fileSize_total += fileSize;
          // errors.push(
          //   <p>
          //     {files.lenght}
          //     archivos para subir, peso total:
          //     {Math.round((fileSize_total / 1024 / 1024) * 100) / 100}
          //     Mbytes.
          //   </p>
          // );
          console.log(file);
        }
      });
    }
    if (errors.lenght > 0) {
      setSuccess(false);
      setErrors(errors);
    } else if (e.lenght > 0) {
      setSuccess(true);
      setErrors({});
      setMediaFiles(e);
    }
  };

  const clickbuttonupload = (isUpOption) => {
    if (isUpOption == "subir" && !success) {
      changeMessage(" Vuelva a seleccionar algún archivo");
    } else if (isUpOption == "importar" && !success) {
      var namefileimport = mediaFiles2;
      if (namefileimport == "") {
        changeMessage("URL no válida");
      } else {
        var namefileimport_array = namefileimport?.split(".");
        let ext = namefileimport_array.at(-1);
        if (!isImage(ext) && !isVideo(ext)) {
          changeMessage("Nombre de extensión (" + ext + ") no valido");
        }
      }
    } else {
      let req = { data, mediaFiles, props };
      if (props?.kind === "anime") req.kind = kind;
      changeContent(<div>Cargando...</div>);
      insertMedia(req).then((result) => {
        console.log(result);
        changeCursorStyles(styles.cursorDefault);
        //mediaList.push(rersult.data);
        //changeMediaList(mediaList);
        setOpen(false);
      });
    }
  };

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
      <MediaTabs
        kind={props?.kind}
        changeKind={(e) => setKind(e)}
        message={message}
      />
      {errors.lenght > 0 ? (
        <section className={styles.info}>
          {errors.map((element, i) => {
            <article key={i}> {element}</article>;
          })}
        </section>
      ) : null}
      <input name="sizeminH" value="300" type="hidden" />
    </div>
  );
};

const MediaTabs = ({ kind, changeKind, message }) => {
  if (kind !== "anime") {
    return <div className={styles.messagesupload}>{message}</div>;
  }

  return (
    <ul className={styles.tab}>
      <input
        type="radio"
        value="banner"
        className={styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <input
        type="radio"
        value="portada"
        className={styles.tablinks}
        onChange={(e) => changeKind(e.target.value)}
      />
      <div className={styles.messagesupload}>{message}</div>
    </ul>
  );
};

const MediaElement = ({ mediaList, changeMedialIst }) => {
  const deletefile = (id) => {};

  return (
    <tr>
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
          <div class="button" onclick={() => deletefile(element.id)}>
            <i class="fa fa-trash" style="font-size:20px;"></i>
          </div>
        </div>
      </td>
    </tr>
  );
};
