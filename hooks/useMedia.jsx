import { useEffect, useState } from "react";

export const useMedia = ({ media }) => {
  const [content, setContent] = useState(
    <div>Para agregar archivos debe antes guardar el contenido.</div>
  );
  const [mediaList, setMediaList] = useState([]);
  const [cursorStyles, setcursorStyles] = useState("cursorDefault");

  useEffect(() => {
    if (media) {
      setMediaList(media);
      setContent("");
      setcursorStyles("cursorPointer");
    } else {
      console.info(media);
    }

    // return () => {
    //   setMediaList([]);
    //   setContent("");
    //   setcursorStyles('cursorDefault');
    // }
  }, []);

  const changeContent = (e) => {
    setContent(e);
  };

  const changeCursorStyles = (e) => {
    setcursorStyles(e);
  };

  const addElementMediaList = (e) => {
    setMediaList(mediaList.concat(e));
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
