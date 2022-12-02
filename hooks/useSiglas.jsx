import { useContext, useCallback } from "react";
import { SiglasContext } from "@/context/SiglasContext";
import { useRouter } from "next/router";

export function useSiglas() {
  const href = useRouter();
  const { siglas } = href.query;
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);

  const changeSiglas = useCallback((e) => {
    let sigla = e.target.value;
    let s = sigla === "else" ? "" : sigla;
    setSiglasPage(s);
  }, []);

  return [siglas, siglasPage, changeSiglas];
}
