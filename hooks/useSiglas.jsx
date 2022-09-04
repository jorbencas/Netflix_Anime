import { useState, useEffect } from "react";
import { defaultSiglas } from "../services";
import { useRouter } from "next/router";

export function useSiglas() {
  const href = useRouter();
  const { siglas } = href.query;
  const [siglasPage, setSiglasPage] = useState("");
  const [siglasLista, setSiglasLista] = useState([]);

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
