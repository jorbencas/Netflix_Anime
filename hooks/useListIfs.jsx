import { useContext, useState, useEffect } from "react";
import { SiglasContext } from "@/context/SiglasContext";
import { getListIds } from "../services";

export function useListIds(kind) {
  const [siglasPage] = useContext(SiglasContext);
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (siglasPage) {
      getListIds(siglasPage, kind)
        .then((list) => {
          if (list?.data) {
            setId(list?.data[0]);
            setList(list?.data);
          }
        })
        .catch((err) => console.error(err));
    }

    return () => {
      setList([]);
      setId(0);
    };
  }, []);

  return [id, list, setId];
}
