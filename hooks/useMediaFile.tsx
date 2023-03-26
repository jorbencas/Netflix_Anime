import { useState, useEffect } from "react";
import { getMedia } from "@/services/index";

export function useMediaFile(filePath: Object | String) {
  const [videoSrc, setVideoSrc] = useState(null);
  useEffect(() => {
    if (filePath === Object(filePath)) {
      let src = Object(filePath)
      setVideoSrc(URL.createObjectURL(src?.mediaFiles?.files));
    } else if (filePath === String(filePath)) {
      getMedia(filePath)
        .then((e) => setVideoSrc(e))
        .catch((err) => console.error(err));
    }
  }, []);
  return [videoSrc];
}
