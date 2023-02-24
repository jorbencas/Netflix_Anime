import { useContext, useCallback } from "react";
import { SiglasContext } from "@/context/SiglasContext";

export function useSiglas() {
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);

  const changeSiglas = useCallback((e) => {
    let sigla = e.target.value;
    let s = sigla === "else" ? "" : sigla;
    setSiglasPage(s);
  }, []);

  return [siglasPage, changeSiglas];
}
