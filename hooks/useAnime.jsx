import { useState, useEffect, useReducer } from "react";
import { getAnime } from "@/services/index";

function reducer(state, action) {
  // ...
}
export function useAnime(siglas) {
  let initialState = {
    tittle: "",
    sinopsis: "",
    date_publication: "",
    date_finalization: "",
    temporadas: [],
    generes: ["action"],
    state: "",
    idioma: "",
    media: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);












  
  useEffect(() => {
    if (siglas) {
      getAnime(siglas)
        .then((anime) => {
          const {
            tittle,
            sinopsis,
            date_publication,
            date_finalization,
            temporadas,
            generes,
            state,
            idioma,
            media,
          } = anime?.data;
          setTittle(tittle);
          setSinopsis(sinopsis);
          setDate_publication(date_publication);
          setDate_finalization(date_finalization);
          setTemporadas(temporadas);
          // setGeneres(generes);
          setState(state);
          setIdioma(idioma);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setSinopsis([]);
      setDate_publication([]);
      setDate_finalization([]);
      setTemporadas([]);
      setGeneres([]);
      setState([]);
      setIdioma([]);
      setMedia([]);
    };
  }, []);

  return [
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    date_publication,
    setDate_publication,
    date_finalization,
    setDate_finalization,
    temporadas,
    setTemporadas,
    generes,
    setGeneres,
    state,
    setState,
    idioma,
    setIdioma,
    media,
    setMedia,
  ];
}
