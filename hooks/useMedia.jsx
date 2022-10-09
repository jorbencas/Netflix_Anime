export const useMedia = ({ media, changeMedia }) => {

  const addElementMediaList = (e) => {
    changeMedia(media.concat(e));
  };

  const removeElementMediaList = (id) => {
    let medialist = media;
    let element = medialist.filter((e) => {
      e.id === id;
    });
    medialist.slice(medialist.indexOf(element), 1);
    changeMedia(medialist);
  };

  return [addElementMediaList, removeElementMediaList];
};
