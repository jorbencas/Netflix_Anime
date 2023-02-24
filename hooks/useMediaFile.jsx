import { useState, useEffect } from "react";
import { getMedia } from "@/services/index";

export function useMediaFile(filePath) {
  const [videoSrc, setVideoSrc] = useState(null);
  useEffect(() => {
    getMedia(filePath).then((e) => setVideoSrc(e));
  }, []);
  return [videoSrc];
}
