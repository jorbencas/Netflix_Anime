import { createContext, useReducer } from "react";
import MensajesIngles from "../lang/en.json";
import MensajesEspañol from "../lang/es.json";

export const LangContext = createContext();

const initialState = { locale: "es", mensajes: MensajesEspañol };

const LangReducer = (state, action) => {
  switch (action.type) {
    case "ES":
      localStorage.setItem("lang", "es");
      return { locale: "es", mensajes: MensajesEspañol };
    case "EN":
      localStorage.setItem("lang", "en");
      return { locale: "en", darkMode: MensajesIngles };
    default:
      return state;
  }
};

export function LangProvider(props) {
  const [state, dispatch] = useReducer(LangReducer, initialState);

  return (
    <LangContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </LangContext.Provider>
  );
}
