export const useMedia = (media, changeMedia) => {
  const addElementMediaList = (e) => {
    changeMedia([
      e,
      ...media, // Put old items at the end
    ]);
  };

  const removeElementMediaList = (id) => {
    changeMedia(
      media.filter((e, i) => {
        i !== id;
      })
    );
  };

  return [addElementMediaList, removeElementMediaList];
};
