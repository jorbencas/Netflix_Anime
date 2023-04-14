import { useState, useEffect } from "react";
import { getMedia } from "@/services/index";

export function useMediaFile(filePath: Object | String) {
  const [videoSrc, setVideoSrc] = useState(null);
  const [element, setElement ] = useState({});
  useEffect(() => {
    if (filePath === Object(filePath)) {
      const {...params} = Object(filePath);
      const {file} = params;
      setElement({...params, ...file});
      setVideoSrc(URL.createObjectURL(file));
    } else if (filePath === String(filePath) && !String(filePath).includes("http")) {
      getMedia(filePath)
        .then((e) => setVideoSrc(e))
        .catch((err) => console.error(err));
    } else {
      setVideoSrc(filePath);
    }
  }, []);
  return {videoSrc, element};
}
