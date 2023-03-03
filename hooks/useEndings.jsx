import { useState, useEffect, useContext } from "react";
import { getEnding } from "@/services/index";
import { SeasionContext } from "@/context/Seasion";
import { useListIds } from "@/hooks/useListIfs";
import { insertEnding, editEnding } from "@/services/index";
import { MediaContext } from "@/context/Media";

export function useEnding({ kind }) {
  const [siglasPage, id, list, setId] = useListIds(kind);
  const { seasion, setSeasion } = useContext(SeasionContext);
  const [tittle, setTittle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [num, setNum] = useState(0);
  const { media, setMedia, setK, setId_external } = useContext(MediaContext);
  useEffect(() => {
    if (id) {
      getEnding(id)
        .then((a) => {
          const { tittle, sinopsis, anime, num } = a?.data;
          setTittle(tittle);
          setSinopsis(sinopsis);
          setNum(num);
          setSeasion(a?.data.seasion);
          setMedia(a?.data.media);
          setK("endings");
          setId_external(id);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setSinopsis([]);
      setNum(num);
      setMedia([]);
      setK("");
      setId_external(0);
    };
  }, [id]);

  const sendEnding = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime: siglasPage, num, seasion, media };
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
