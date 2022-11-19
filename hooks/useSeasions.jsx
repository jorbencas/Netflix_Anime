import { useState, useEffect, useContext } from "react";
import { getSeasions } from "@/services/index";
import { SeasionContext } from "../context/Seasion";
import { SiglasContext } from "@/context/SiglasContext";
import { editOpening, insertOpening } from "@/services/index";
import { useListIds } from "@/hooks/useListIfs";

export function useSeasion({ kind }) {
  const [id, setId, list] = useListIds(kind);
  const [seassion, setSeassion] = useContext(SeasionContext);
  const [tittle, setTittle] = useState({});
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (id) {
      setSeassion(id);
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
  }, [id]);

  const sendSeasion = () => {
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

    console.log("====================================");
    console.log(siglasPage);
    console.log("====================================");
    let data = { tittle };
    setTittle("");
    setCode("");
    // insertFilters(data).then((res) => {
    //   generesLista.push(res.data);
    //   changeGeneres(generesLista);
    setOpen(false);
    // });

    setSeassion(id);
  };
  return [list, setId, tittle, setTittle, media, sendSeasion];
}
