import { useState, useEffect } from "react";
import { getMedia } from "@/services/index";

export function useMediaFile(filepATH) {
  const [videoSrc, setVideoSrc] = useState(null);
  useEffect(() => {
    getMedia(filepATH).then((e) => setVideoSrc(e));
  }, []);
  return [videoSrc];
}
