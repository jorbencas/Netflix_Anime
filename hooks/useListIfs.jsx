import { useState, useEffect } from "react";
import { getListIds } from "../services";
import { useSiglas } from '@/hooks/useSiglas';

export function useListIds(kind) {
  const { siglasPage } = useSiglas();
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

  return [siglasPage,id, list, setId];
}
