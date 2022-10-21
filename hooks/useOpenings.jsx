import { useState, useEffect } from "react";
import { getOpening } from "@/services/index";

export function useOpening( id ) {
  const [tittle, setTittle] = useState({});
  const [sinopsis, setSinopsis] = useState({});
  const [anime, setAnime] = useState({});
  const [num, setNum] = useState({});
  const [seasion, setSeasion] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      getOpening(id)
        .then((a) => {
          const { tittle, sinopsis, anime, num, seasion, media } = a?.data;
          setTittle(tittle);
          setSinopsis(sinopsis);
          setAnime(anime);
          setSeasion(seasion);
          setNum(num);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setSinopsis([]);
      setAnime(anime);
      setSeasion(seasion);
      setNum(num);
      setMedia([]);
    };
  }, []);

  return [tittle, sinopsis, anime, num, seasion, media, setMedia];
}
