import { createContext, useReducer } from "react";

export const GeneresContext = createContext();

const initialState = { };

const GeneresReducer = (state, action) => {
  switch (action.type) {
    case "ONE":
     
      return generes;
    case "ALL":
      localStorage.setItem("Generes", "en");
      return { locale: "en", darkMode: MensajesIngles };
    default:
      return state;
  }
};

export function GeneresProvider(props) {
  const [state, dispatch] = useReducer(GeneresReducer, initialState);

  return (
    <GeneresContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </GeneresContext.Provider>
  );
}
