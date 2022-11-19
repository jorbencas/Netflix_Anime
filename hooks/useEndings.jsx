import { useState, useEffect, useContext } from "react";
import { getEnding } from "@/services/index";
import { SiglasContext } from "@/context/SiglasContext";
import { SeasionContext } from "../context/Seasion";
import { useListIds } from "@/hooks/useListIfs";
import { insertEnding, editEnding } from "@/services/index";

export function useEnding({ kind }) {
  const [id, list, setId] = useListIds(kind);
  const [seassion, setSeassion] = useContext(SeasionContext);
  const [tittle, setTittle] = useState({});
  const [sinopsis, setSinopsis] = useState({});
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);
  const [num, setNum] = useState({});
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      getEnding(id)
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

  const sendEnding = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime, num, seasion, media };
    console.log(data);
    if (id) {
      editEnding(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertEnding(data)
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
    sendEnding,
  ];
}
