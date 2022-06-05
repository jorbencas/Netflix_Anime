// import Admin from './pages/Admin';
// import Anime from "pages/Anime/Anime";
// import AnimeDetails from "pages/AnimeDetails/AnimeDetails";
// import Auth from "pages/Auth/Auth";
// import Collection from './pages/Collection';
// import Edit from './pages/Edit';
// import History from './pages/History';
import Home from "../../pages/Home/Home.jsx";
// import User from './pages/User';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
// import Aleatory from "pages/Aleatory/Aleatory";
// import ProgressBar from "components/ProgressBar/ProgressBar";
import Counter from "../../counter/counter.jsx";
import "./App.css";
import { Router } from "../../router/router.jsx";
import { LangProvider } from "../../context/LangContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <Counter />
        <Router />
        <Footer />
      </LangProvider>
    </ThemeProvider>
  );
};
export default App;
