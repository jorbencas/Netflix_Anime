import { useState, useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { SiglasContext } from "@/context/SiglasContext";

export const useMediaForm = (
  changeContent,
  changeCursorStyles,
  addElementMediaList
) => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [mediaFiles2, setMediaFiles2] = useState([]);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [kind, setKind] = useState("");
  const [message, setMessage] = useState("");
  const { setOpen } = useContext(ModalContext);
  const { siglasPage } = useContext(SiglasContext);

  function isImage(extension) {
    let valids = ["jpg", "jpeg", "png", "gif", "bmp"];
    return valids.includes(extension.toLowerCase());
  }

  function isVideo(extension) {
    return extension.toLowerCase() == "mp4" ? true : false;
  }

  const readFile = (e) => {
    setMediaFiles(e);
    if (siglasPage.lenght < 3) {
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
          console.info(file);
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
      setMessage(" Vuelva a seleccionar algún archivo");
    } else if (isUpOption == "importar" && !success) {
      var namefileimport = mediaFiles2;
      if (namefileimport == "") {
        setMessage("URL no válida");
      } else {
        var namefileimport_array = namefileimport?.split(".");
        let ext = namefileimport_array.at(-1);
        if (!isImage(ext) && !isVideo(ext)) {
          setMessage("Nombre de extensión (" + ext + ") no valido");
        }
      }
    } else {
      let req = { data, mediaFiles, props };
      if (kind === "banner" || kind == "portada") req.kind = kind;
      changeContent(<div>Cargando...</div>);
      insertMedia(req).then((result) => {
        console.info(result);
        changeCursorStyles("cursorDefault");
        addElementMediaList(rersult.data);
        setOpen(false);
      });
    }
  };

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

  return [
    message,
    readFile,
    clickbuttonupload,
    setMediaFiles2,
    setKind,
    errors,
  ];
};