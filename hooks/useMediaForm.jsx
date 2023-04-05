import { useState, useContext } from "react";
import { ModalContext } from "@/context/ModalContext";
import { useSiglas } from "@/hooks/useSiglas";
import { MediaContext } from "@/context/Media";

export const useMediaForm = () => {
  const { media, setMedia, id_external, k, setId_external } =
    useContext(MediaContext);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [kind, setKind] = useState(ObtenerKind());
  const { setOpen } = useContext(ModalContext);
  const [siglas, siglasPage] = useSiglas();

  function isImage(extension) {
    let valids = ["jpg", "jpeg", "png", "gif", "bmp"];
    return valids.includes(extension.toLowerCase());
  }

  function isVideo(extension) {
    return extension.toLowerCase() == "mp4";
  }

  function ObtenerKind() {
    let kindState = "";
    if (k === "animes" && media.length > 0) {
      let kindMedia = media.some((m) => {
        m.kind == "portada";
      });
      kindState = kindMedia ? "portada" : "banner";
    }
    return kindState;
  }
  const readFile = (e) => {
    if (siglasPage.length < 3) {
      errors.push(
        `Debes de introducir la ssiglas del ${k} antes de poder
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
          // let reader = new FileReader();
          // reader.readAsDataURL(file);
          // reader.onloadend = function () {
          //   console.log("====================================");
          //   console.log(this);
          //   console.log("====================================");
          //   file.urlarchivo = reader.result;
          // };
          fileSize_total += fileSize;
          file.filesize =
            Math.round((fileSize_total / 1024 / 1024) * 100) / 100;
          console.info(siglasPage);
          file.nombre = fileName;
        }
        setStateSucess(file);
      }
    } else {
      errors.push("Vuelva a seleccionar algún archivo");
    }

    if (errors.length > 0) {
      setSuccess(false);
      setErrors(errors);
      console.log(errors);
    }
  };

  const setStateSucess = (file) => {
    setSuccess(true);
    setErrors([]);
    if (k === "animes") {
      setId_external(siglasPage);
    }
    let req = {
      id: media.length,
      tabla: k,
      file,
      kind,
      id_external,
    };
    console.log(req);
    setMedia([
      req,
      ...media, // Put old items at the end
    ]);
  };

  const readUrl = (namefileimport) => {
    if (namefileimport == "") {
      errors.push("URL no válida");
    } else {
      var namefileimport_array = namefileimport?.split(".");
      let ext = namefileimport_array.at(-1);
      if (!isImage(ext) && !isVideo(ext)) {
        errors.push("Nombre de extensión (" + ext + ") no valido");
      } else {
        setStateSucess(namefileimport_array);
      }
    }

    if (errors.length > 0) {
      setSuccess(false);
      setErrors(errors);
    }
  };

  const clickbuttonupload = () => {
    if (success) {
      setOpen(false);
    }
  };

  return [readFile, clickbuttonupload, readUrl, k, kind, setKind, errors];
};
