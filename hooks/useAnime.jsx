import { useState, useEffect } from "react";
import { getAnime } from "@/services/index";

export function useAnime({ siglas }) {
  const [tittle, setTittle] = useState({});
  const [sinopsis, setSinopsis] = useState({});
  const [date_publication, setDate_publicationt] = useState({});
  const [date_finalization, setDate_finalization] = useState({});
  const [temporadas, setTemporadas] = useState({});
  const [generes, setGeneres] = useState({});
  const [state, setState] = useState({});
  const [idioma, setIdioma] = useState({});
  const [media, setMedia] = useState([]);

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
          setDate_publicationt(date_publication);
          setDate_finalization(date_finalization);
          setTemporadas(temporadas);
          setGeneres(generes);
          setState(state);
          setIdioma(idioma);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    return () => {
      setTittle([]);
      setSinopsis([]);
      setDate_publicationt([]);
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
    sinopsis,
    date_publication,
    date_finalization,
    temporadas,
    generes,
    state,
    idioma,
    media,
  ];
}
