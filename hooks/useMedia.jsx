import { useEffect, useState } from "react";

export const useMedia = ({ media }) => {
  const [content, setContent] = useState(
    <div>Para agregar archivos debe antes guardar el contenido.</div>
  );
  const [mediaList, setMediaList] = useState([]);
  const [cursorStyles, setcursorStyles] = useState("cursorDefault");

  useEffect(() => {
    if (media) {
      setContent("");
      setcursorStyles("cursorPointer");
    } else {
      console.info(media);
      // setContent("");
      // setcursorStyles('cursorDefault');
    }
  }, []);

  const changeContent = (e) => {
    setContent(e);
  };

  const changeCursorStyles = (e) => {
    setcursorStyles(e);
  };

  const addElementMediaList = (e) => {
    let medialist = mediaList;
    medialist.push(e);
    setMediaList(medialist);
  };

  const removeElementMediaList = (id) => {
    let medialist = mediaList;
    let element = medialist.filter((e) => {
      e.id === id;
    });
    medialist.slice(medialist.indexOf(element), 1);
    setMediaList(medialist);
  };

  return [
    content,
    mediaList,
    cursorStyles,
    addElementMediaList,
    removeElementMediaList,
    changeContent,
    changeCursorStyles,
  ];
};
