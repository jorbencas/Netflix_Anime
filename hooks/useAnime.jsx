import { useEffect, useReducer, useState, useContext } from "react";
import { getAnime, editAnime, insertAnime } from "@/services/index";
import { getTemporadas, getGeneres, getIdiomaLista } from "@/services/index";
import { SiglasContext } from "@/context/SiglasContext";

function reducer(state, action) {
  const { type } = action;
  if (type == "setTittle") {
    return {
      ...state,
      tittle: action.tittle,
    };
  } else if (type == "setSinopsis") {
    return {
      ...state,
      sinopsis: action.sinopsis,
    };
  } else if (type == "setDate_publication") {
    return {
      ...state,
      date_publication: action.date_publication,
    };
  } else if (type == "setDate_finalization") {
    return {
      ...state,
      date_finalization: action.date_finalization,
    };
  } else if (type == "setTemporadas") {
    return {
      ...state,
      temporadas: action.temporadas,
    };
  } else if (type == "setGeneres") {
    return {
      ...state,
      generes: action.generes,
    };
  } else if (type == "setState") {
    return {
      ...state,
      state: action.state,
    };
  } else if (type == "setIdioma") {
    return {
      ...state,
      idioma: action.idioma,
    };
  } else if (type == "setMedia") {
    return {
      ...state,
      media: action.media,
    };
  } else {
    return {
      ...state,
    };
  }
}
export function useAnime() {
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
      media,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { siglasPage } = useContext(SiglasContext);
  const [idiomasLista, setIdiomasLista] = useState([]);
  const [generesLista, setGeneresLista] = useState([]);
  const [temporadasLista, setTemporadasLista] = useState([]);

  useEffect(() => {
    if (siglasPage) {
      getAnime(siglasPage)
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
          setGeneres(generes);
          setState(state);
          setIdioma(idioma);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }

    getGeneres().then((genere) => {
      if (genere?.data) {
        setGeneresLista(genere?.data);
      }
    });

    getTemporadas().then((temporada) => {
      if (temporada?.data) {
        setTemporadasLista(temporada?.data);
      }
    });
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
  const setMedia = (media) => {
    dispatch({ type: "setMedia", media });
  };

  const setFilters = (k, kind) => {
    let list = {};
    if (kind == "Generes") {
      list[kind] = generes;
    } else {
      list[kind] = temporadas;
    }
    let content;

    if (list[kind].includes(k)) {
      content = list[kind].filter((e) => e !== k);
    } else {
      content = [
        k,
        ...list[kind], // Put old items at the end
      ];
    }

    if (kind == "Generes") {
      setGeneres(content);
    } else {
      setTemporadas(content);
    }
  };

  const sendAnime = (e) => {
    e.preventDefault();
    if (media.length == 0) return;
    let data = {
      siglas,
      tittle,
      sinopsis,
      date_publication,
      date_finalization,
      temporadas,
      generes,
      state,
      idioma,
      media,
    };
    if (siglas) {
      // editAnime(data)
      //   .then((result) => {
      //     console.log("====================================");
      //     console.log(result);
      //     console.log("====================================");
      //   })
      //   .catch((err) => console.error(err));
    } else {
      console.log(data);
      // insertAnime(data)
      // .then((result) => {
      //   console.log("====================================");
      //   console.log(result);
      //   console.log("====================================");
      // })
      // .catch((err) => console.error(err));
    }
  };
  return [
    siglasPage,
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
    media,
    setMedia,
    sendAnime,
    idiomasLista,
    generesLista,
    temporadasLista,
    setFilters,
  ];
}
