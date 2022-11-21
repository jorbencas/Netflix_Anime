import { useState, useEffect, useContext } from "react";
import { getOpening } from "@/services/index";
import { SeasionContext } from "@/context/Seasion";
import { useListIds } from "@/hooks/useListIfs";
import { insertOpening, editOpening } from "@/services/index";

export function useOpening(kind) {
  const [siglasPage, id, list, setId] = useListIds(kind);
  const { seasion } = useContext(SeasionContext);
  const [tittle, setTittle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [num, setNum] = useState(0);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      getOpening(id)
        .then((a) => {
          const { tittle, sinopsis, anime, num, seasion, media } = a?.data;
          setTittle(tittle);
          setSinopsis(sinopsis);
          setNum(num);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setSinopsis([]);
      setNum(num);
      setMedia([]);
    };
  }, [id]);

  const sendOpening = () => {
    if (media.length == 0) return;
    let data = { tittle, sinopsis, anime: siglasPage, num, seasion, media };
    console.log(data);
    if (id) {
      editOpening(data)
        .then((result) => {
          console.log("====================================");
          console.log(result);
          console.log("====================================");
        })
        .catch((err) => console.error(err));
    } else {
      insertOpening(data)
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
    setNum,
    media,
    setMedia,
    sendOpening,
  ];
}
