import { useEffect, useReducer } from "react";
import { getAnime } from "@/services/index";

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
    console.log("====================================");
    console.log(type);
    console.log(state);
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

  const [s, dispatch] = useReducer(reducer, initialState);
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
  } = s;
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
          setGeneres(generes);
          setState(state);
          setIdioma(idioma);
          setMedia(media);
        })
        .catch((err) => console.error(err));
    }
    // return () => {
    //   setTittle([]);
    //   setSinopsis([]);
    //   setDate_publication([]);
    //   setDate_finalization([]);
    //   setTemporadas([]);
    //   setGeneres([]);
    //   setState([]);
    //   setIdioma([]);
    //   setMedia([]);
    // };
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
