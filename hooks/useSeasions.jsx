import { useState, useEffect, useContext } from "react";
import { getSeasions } from "@/services/index";
import { SeasionContext } from "@/context/Seasion";
import { editOpening, insertOpening } from "@/services/index";
import { useListIds } from "@/hooks/useListIfs";

export function useSeasion({ kind }) {
  const [siglasPage, id, setId, list] = useListIds(kind);
  const { setSeasion } = useContext(SeasionContext);
  const [tittle, setTittle] = useState({});

  useEffect(() => {
    if (id) {
      setSeasion(id);
      getSeasions(id)
        .then((a) => {
          const { tittle } = a?.data;
          setTittle(tittle);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
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

    setSeasion(id);
  };
  return [list, setId, tittle, setTittle, media, sendSeasion];
}
