import { useState, useEffect, useContext } from "react";
import { defaultSiglas } from "../services";
import { useRouter } from "next/router";
import { SiglasContext } from "@/context/SiglasContext";

export function useSiglas() {
  const href = useRouter();
  const { siglas } = href.query;
  const [siglasLista, setSiglasLista] = useState([]);
  const { siglasPage, setSiglasPage } = useContext(SiglasContext);

  useEffect(() => {
    defaultSiglas()
      .then((si) => {
        setSiglasLista(si.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setSiglasLista([]);
    };
  }, []);

  const changeSiglasList = (e) => {
    let sigla = e.target.value;
    if (sigla !== "else") {
      setSiglasPage(sigla);
    } else if (siglas !== sigla) {
      setSiglasPage("");
    }
  };

  return [siglas, siglasLista, siglasPage, changeSiglasList];
}
