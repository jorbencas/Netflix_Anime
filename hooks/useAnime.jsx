import { useEffect, useReducer } from "react";
import { getAnime } from "@/services/index";

function reducer(state, action) {
  const { type, payload } = action;
  if (type == "setTittle") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;

    // return {
    //   ...state,
    //   todos: [...state.todos, { id: nextId++, text: action.text }],
    // };

    return { anime };
  } else if (type == "setSinopsis") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setDate_publication") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setDate_finalization") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setTemporadas") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setGeneres") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setState") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setIdioma") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else if (type == "setMedia") {
    const anime = structuredClone(state);
    const { tittle } = payload;
    anime.tittle = tittle;
    return { anime };
  } else {
    return state;
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
          dispatch({ type: "setTittle" });
          dispatch({ type: "setSinopsis" });
          dispatch({ type: "setDate_publication" });
          dispatch({ type: "setDate_finalization" });
          dispatch({ type: "setTemporadas" });
          dispatch({ type: "setGeneres" });
          dispatch({ type: "setState" });
          dispatch({ type: "setIdioma" });
          dispatch({ type: "setMedia" });
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
