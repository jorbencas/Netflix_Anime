import {
  StrictMode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import ReactDOM from "react-dom/client";
// import { LangProvider } from "./context/LangContext.jsx";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import RouterApp from "./router/router.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import "./styles/App.css";
import { 
  Link, useRoute, Router } from "wouter";
import { useHashLocation } from "./hooks/useHashLocation";

// const App = () => {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div data-theme={darkMode}>
//       <Header />
//       <RouterApp />
//       <Footer />
//     </div>
//   );
// };

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active" : ""}>{props.children}</a>
    </Link>
  );
};

function App() {
  return (
    <Router hook={useHashLocation}>
      <div className="App">
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">What is Wouter</ActiveLink>
          <ActiveLink href="/faq">FAQ</ActiveLink>
          <ActiveLink href="/info">More Info (redirect)</ActiveLink>
        </nav>

        <main>
          <RouterApp />
        </main>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* <LangProvider> */}
      <App />
      {/* </LangProvider> */}
    </ThemeProvider>
  </StrictMode>
);
