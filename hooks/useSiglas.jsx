import { useContext, useCallback } from "react";
import { SiglasContext } from "@/context/SiglasContext";

export function useSiglas() {
  const { siglas, siglasPage, setSiglasPage } = useContext(SiglasContext);

  const changeSiglas = useCallback((e) => {
    let sigla = e.target.value;
    let saga = e.target.attributes.first.saga;
    let s = sigla === "else" ? "" : sigla;
    console.log(s);
    setSiglasPage({ siglas: s, saga: saga });
  }, []);

  return { siglas, siglasPage, changeSiglas };
}
