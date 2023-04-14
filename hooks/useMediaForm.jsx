import { useState, useContext, useEffect } from "react";
import { ModalContext } from "@/context/ModalContext";
import { useSiglas } from "@/hooks/useSiglas";
import { MediaContext } from "@/context/Media";

export const useMediaForm = () => {
  const { media, setMedia, id_external, k, setId_external } =
    useContext(MediaContext);
  const [errors, setErrors] = useState([]);
  const [kind, setKind] = useState("");
  const { setOpen } = useContext(ModalContext);
  const { siglasPage } = useSiglas();

  useEffect(() => {
    if (siglasPage.length < 3) {
      setErrors([
        `Debes de introducir la ssiglas del ${k} antes de poder
          subrir cualquier fichero multimedia.`,
      ]);
    } else if (k === "animes") {
      setId_external(siglasPage);
      setKind(ToogleKind());
    }
  }, []);

  function isImage(extension) {
    let valids = ["jpg", "jpeg", "png", "gif", "bmp"];
    return valids.includes(extension.toLowerCase());
  }

  function isVideo(extension) {
    return extension.toLowerCase() == "mp4";
  }

  function ToogleKind() {
    let kindState = "portada";
    if (media.length > 0 && media.some(({ kind }) => kind === kindState)) {
      kindState = "banner";
    }
    return kindState;
  }
  const readFile = (e) => {
    let err = [];
    let elements = [];
    if (e.length > 0) {
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
          err.push(`Nombre de extensión ${fileExtension} no valido`);
        } else if (fileName.split(".").length > 2) {
          err.push(`Solo se permite un punto (.) en el nombre`);
        } else {
          fileSize_total += fileSize;
          file.filesize =
            Math.round((fileSize_total / 1024 / 1024) * 100) / 100;
          console.info(siglasPage);
          file.nombre = fileName.split(".").shift();
        }
        addElement(elements, file);
      }
    } else {
      err.push("Vuelva a seleccionar algún archivo");
    }

    if (err.length > 0) {
      setErrors(err);
    } else if (elements.length > 0) {
      setMedia([
        ...media,
        ...elements, // Put old items at the end
      ]);
      setOpen(false);
    }
  };

  const addElement = (elements, file) => {
    let req = {
      id: media.length + 1,
      tabla: k,
      file,
      kind,
      id_external,
    };
    elements.push(req);
  };

  const readUrl = (namefileimport) => {
    let err = [];
    let elements = [];
    if (namefileimport == " ") {
      err.push("URL no válida");
    } else {
      var namefileimport_array = namefileimport?.split(".");
      let ext = namefileimport_array.at(-1);
      if (!isImage(ext) && !isVideo(ext)) {
        err.push("Nombre de extensión (" + ext + ") no valido");
      } else {
        addElement(elements, namefileimport_array);
      }
    }

    if (err.length > 0) {
      setErrors(err);
    } else if (elements.length > 0) {
      setMedia([
        ...media,
        ...elements, // Put old items at the end
      ]);
      setOpen(false);
    }
  };

  return { readFile, readUrl, k, kind, setKind, errors };
};
