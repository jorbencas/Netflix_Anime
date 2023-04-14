import { useEffect, useReducer, useState, useContext } from "react";
import { getAnime, inserteditAnime } from "@/services/index";
import { getTemporadas, getGeneres, getIdiomaLista } from "@/services/index";
import { useSiglas } from "@/hooks/useSiglas";
import { MediaContext } from "@/context/Media";
import { anime_reducer, animeState } from "reducers/anime";

export default function useAnime(edit = false) {
  const [
    {
      tittle,
      sinopsis,
      date_publication,
      date_finalization,
      temporadas,
      generes,
      state,
      idioma,
      kind,
    },
    dispatch,
  ] = useReducer(anime_reducer, animeState);

  const { siglasPage } = useSiglas();
  const [idiomasLista, setIdiomasLista] = useState([]);
  const [generesLista, setGeneresLista] = useState([]);
  const [temporadasLista, setTemporadasLista] = useState([]);
  const { media, setMedia, setK, setId_external } = useContext(MediaContext);

  useEffect(() => {
    if (siglasPage.length > 3) {
      getAnime(siglasPage, edit)
        .then((anime) => {
          if (anime?.status?.code === 200) {
            const {
              tittle,
              sinopsis,
              date_publication,
              date_finalization,
              temporadas,
              generes,
              state,
              idioma,
              kind,
            } = anime?.data;
            setTittle(tittle);
            setSinopsis(sinopsis);
            setDate_publication(date_publication);
            setDate_finalization(date_finalization);
            setTemporadas(temporadas);
            setGeneres(generes);
            setState(state);
            setIdioma(idioma);
            setMedia(anime?.data.media);
            setId_external(siglasPage);
            setKind(kind);
          }
        })
        .catch((err) => console.error(err));
    }
    setK("animes");
    getGeneres()
      .then((genere) => {
        if (genere?.data) {
          setGeneresLista(genere?.data);
        }
      })
      .catch((err) => console.error(err));

    getTemporadas()
      .then((temporada) => {
        if (temporada?.data) {
          setTemporadasLista(temporada?.data);
        }
      })
      .catch((err) => console.error(err));

    getIdiomaLista()
      .then((idiomas) => {
        if (idiomas?.data) setIdiomasLista(idiomas?.data);
      })
      .catch((err) => console.error(err));

    return () => {
      setGeneresLista([]);
      setTemporadasLista([]);
      setIdiomasLista([]);
    };
  }, []);

  const setTittle = (tittle) => {
    dispatch({ type: "setTittle", tittle });
  };
  const setSinopsis = (sinopsis) => {
    dispatch({ type: "setSinopsis", sinopsis });
  };
  const setDate_publication = (date_publication) => {
    dispatch({ type: "setDate_publication", date_publication });
  };
  const setDate_finalization = (date_finalization) => {
    dispatch({ type: "setDate_finalization", date_finalization });
  };
  const setTemporadas = (temporadas) => {
    dispatch({ type: "setTemporadas", temporadas });
  };
  const setGeneres = (generes) => {
    dispatch({ type: "setGeneres", generes });
  };
  const setState = (state) => {
    dispatch({ type: "setState", state });
  };
  const setIdioma = (idioma) => {
    dispatch({ type: "setIdioma", idioma });
  };

  const setKind = (kind) => {
    dispatch({ type: "setKind", kind });
  };
  const setFilters = (k, kind) => {
    if (kind == "Generes") {
      let content = generes.includes(k)
        ? generes.filter((e) => e !== k)
        : [k, ...generes];
      setGeneres(content);
    } else if (kind == "Temporadas") {
      let content = temporadas.includes(k)
        ? temporadas.filter((e) => e !== k)
        : [k, ...temporadas];
      setTemporadas(content);
    }
  };

  const sendAnime = (e) => {
    e.preventDefault();
    if (media.length == 0) return;
    let data = {
      siglas: siglasPage,
      tittle,
      sinopsis,
      date_publication,
      date_finalization,
      temporadas,
      generes,
      state,
      idioma,
      kind,
      media,
    };
    inserteditAnime(data)
      .then((result) => {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
      })
      .catch((err) => console.error(err));
  };
  return {
    tittle,
    setTittle,
    sinopsis,
    setSinopsis,
    date_publication,
    setDate_publication,
    date_finalization,
    setDate_finalization,
    temporadas,
    generes,
    state,
    setState,
    idioma,
    setIdioma,
    sendAnime,
    idiomasLista,
    generesLista,
    temporadasLista,
    setFilters,
    kind,
    setKind,
  };
}
