import React from 'react';
//import { Provider } from "mobx-react";
import Anime from './pages/Anime';
import Home from './pages/Home';
//import AnimeStore from "./stores/AnimeStore";
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    //<Provider AnimeStore={AnimeStore}>

    <div>
      <Header />
      <Home />
      <Anime />
      <Footer />
    </div>
    //</Provider>
  );
}

export default App;