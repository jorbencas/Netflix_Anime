import { useState, useEffect, useContext } from "react";
import { getEpisode } from "@/services/index";
import { SeasionContext } from "../context/Seasion";
import { SiglasContext } from "@/context/SiglasContext";
import { useListIds } from "@/hooks/useListIfs";
import { insertEpisode, editEpisode } from "@/services/index";

export function useEpisode(kind) {
  const [id, list, setId] = useListIds(kind);
  const [seassion, setSeassion] = useContext(SeasionContext);
  const [tittle, setTittle] = useState({});
  const [sinopsis, setSinopsis] = useState({});
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);
  const [num, setNum] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      getEpisode(id)
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
  }, [id]);

  const sendEpisode = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime, num, seasion, media };
    console.log(data);
    if (id) {
      editEpisode(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertEpisode(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    }
  };

  return [
    id,
    list,
    setId,
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    num,
    media,
    setMedia,
    sendEpisode,
  ];
}
