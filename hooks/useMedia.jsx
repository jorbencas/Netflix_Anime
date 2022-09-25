import { useEffect, useState } from "react";

export const useMedia = ({ media }) => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    if (media) {
      setMediaList(media);
    } else {
      console.info(media);
    }

    return () => {
      setMediaList([]);
    };
  }, []);

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

  return [mediaList, addElementMediaList, removeElementMediaList];
};
