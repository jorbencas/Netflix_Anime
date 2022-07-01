import { StrictMode, useContext } from "react";
import ReactDOM from "react-dom/client";
// import { LangProvider } from "./context/LangContext.jsx";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import RouterApp from "./router/router.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import "./styles/App.css";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div data-theme={darkMode}>
      <Header />
      <RouterApp />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <LangProvider> */}
      <App />
      {/* </LangProvider> */}
    </ThemeProvider>
  </StrictMode>
);
