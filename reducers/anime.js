export let animeState = {
  tittle: "",
  sinopsis: "",
  date_publication: "",
  date_finalization: "",
  temporadas: [],
  generes: ["action"],
  state: "",
  idioma: "",
};

export function anime_reducer(state, action) {
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
  } else {
    return {
      ...state,
    };
  }
}