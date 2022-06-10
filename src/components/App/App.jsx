// import Admin from './pages/Admin';
// import Anime from "pages/Anime/Anime";
// import AnimeDetails from "pages/AnimeDetails/AnimeDetails";
// import Auth from "pages/Auth/Auth";
// import Collection from './pages/Collection';
// import Edit from './pages/Edit';
// import History from './pages/History';
// import Home from "../../pages/Home/Home.jsx";
// import User from './pages/User';
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
// import Aleatory from "pages/Aleatory/Aleatory";
// import ProgressBar from "components/ProgressBar/ProgressBar";
import Counter from "../../counter/counter.jsx";
import "./App.css";
import RouterApp from "../../router/router.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div data-theme={darkMode}>
      <Header />
      <Counter />
      <RouterApp />
      <Footer />
    </div>
  );
};
export default App;
