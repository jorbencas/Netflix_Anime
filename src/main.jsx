import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { LangProvider } from "./context/LangContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>
);
