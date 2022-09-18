import { useState, useEffect } from "react";
import { getSeasions } from "@/services/index";

export function useSeasion({ id }) {
  const [tittle, setTittle] = useState({});
  const [anime, setAnime] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      getSeasions(id)
        .then((a) => {
          const { tittle, anime, media } = a?.data;
          setTittle(tittle);
          setAnime(anime);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setAnime(anime);
      setMedia([]);
    };
  }, []);

  return [tittle, anime, setTittle, media];
}
