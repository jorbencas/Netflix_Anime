import { useState, useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { useSiglas } from "@/hooks/useSiglas";
import { MediaContext } from "@/context/Media";

export const useMediaForm = () => {
  const { media, setMedia, id_external, k } = useContext(MediaContext);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [mediaFiles2, setMediaFiles2] = useState([]);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [kind, setKind] = useState("");
  const [message, setMessage] = useState("");
  const { setOpen } = useContext(ModalContext);
  const { siglasPage } = useSiglas();

  function isImage(extension) {
    let valids = ["jpg", "jpeg", "png", "gif", "bmp"];
    return valids.includes(extension.toLowerCase());
  }

  function isVideo(extension) {
    return extension.toLowerCase() == "mp4" ? true : false;
  }

  const readFile = (e) => {
    if (siglasPage.length < 3) {
      errors.push(
        `Debes de introducir la ssiglas del anime, episodio... antes de poder
          subrir cualquier fichero multimedia.`
      );
    } else if (e.length > 0) {
      var fileSize_total = 0;
      for (const file of e) {
        //obtenemos un array con los datos del archivo
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        var fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
        file.extension = fileExtension;
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        //mensaje con la información del archivo
        if (!isImage(fileExtension) && !isVideo(fileExtension)) {
          errors.push(`
            Nombre de extensión {fileExtension} no valido`);
        } else if (fileName.split(".").length > 2) {
          errors.push(`Solo se permite un punto (.) en el nombre`);
        } else {
          fileSize_total += fileSize;
          if (k == "animes") {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function () {
              file.urlarchivo = reader.result;
            };
          } else {
            file.urlarchivo = "/logo.svg";
          }
          file.filesize =
            Math.round((fileSize_total / 1024 / 1024) * 100) / 100;
          console.info(fileExtension);
          file.nombre = fileName;
        }
      }
    }
    if (errors.length > 0) {
      setSuccess(false);
      setErrors(errors);
    } else if (e.length > 0) {
      setSuccess(true);
      setErrors([]);
      setMediaFiles(e);
    }
  };

  const clickbuttonupload = () => {
    if (mediaFiles.length > 0 && !success) {
      setMessage(" Vuelva a seleccionar algún archivo");
    } else if (mediaFiles2.length > 0 && !success) {
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
    } else if (success) {
      let req = {
        id: mediaFiles.length - 1,
        tabla: k,
        mediaFiles,
        mediaFiles2,
        kind,
        id_external,
        name: mediaFiles[0].nombre,
        exteinsion: mediaFiles[0].extension,
        filesize: mediaFiles[0].filesize,
        urlarchivo: mediaFiles[0].urlarchivo,
      };
      setMedia([
        req,
        ...media, // Put old items at the end
      ]);
      setOpen(false);
    }
  };

  return [
    message,
    readFile,
    clickbuttonupload,
    setMediaFiles2,
    kind,
    setKind,
    errors,
  ];
};
