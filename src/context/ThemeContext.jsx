export const ThemeContext = React.createContext("light");

import React, { useState } from "react";
import MensajesIngles from "./../theme/en-US.json";
import MensajesEspañol from "./../theme/es-MX.json";
import { IntlProvider } from "react-intl";

const themeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;
  const theme = localStorage.getItem("theme");

  if (theme) {
    localePorDefecto = theme;

    if (theme === "es-MX") {
      mensajesPorDefecto = MensajesEspañol;
    } else if (theme === "en-US") {
      mensajesPorDefecto = MensajesIngles;
    } else {
      localePorDefecto = "en-US";
      mensajesPorDefecto = MensajesIngles;
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
  const [locale, establecerLocale] = useState(localePorDefecto);

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-MX":
        establecerMensajes(MensajesEspañol);
        establecerLocale("es-MX");
        localStorage.setItem("theme", "es-MX");
        break;
      case "en-US":
        establecerMensajes(MensajesIngles);
        establecerLocale("en-US");
        localStorage.setItem("theme", "en-US");
        break;
      default:
        establecerMensajes(MensajesIngles);
        establecerLocale("en-US");
        localStorage.setItem("theme", "en-US");
    }
  };

  return (
    <themeContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      {children}
    </themeContext.Provider>
  );
};

export { ThemeProvider, themeContext };
