import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import Admin from './pages/Admin';
import Anime from './pages/Anime';
import AnimeDetails from './pages/AnimeDetails';
import Auth from './pages/Auth';
import Collection from './pages/Collection';
import Edit from './pages/Edit';
import EndingsDetails from './pages/EndingsDetails';
import EpisodeDetails from './pages/EpisodeDetails';
import History from './pages/History';
import Home from './pages/Home';
import OpeningDetails from './pages/OpeningsDetails';
import User from './pages/User';
import AnimeStore from "./stores/AnimeStore";
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <div className="p">
      <Header />
    <Provider AnimeStore={AnimeStore}>
      <Router>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Anime" component={Anime} />
          <Route path="/Admin" component={Admin} />
          <Route path="/AnimeDetails/:id" component={AnimeDetails} />
          <Route path="/Auth" component={Auth} />
          <Route path="/EpisodeDetails/:id" component={EpisodeDetails} />
          <Route path='/OpeningsDetail/:id' component={OpeningDetails}/>
          <Route path='/EndingsDetails/:id' component={EndingsDetails} />
          <Route path="/User" component={User} />
          <Route path="/Collection/:id" component={Collection} />
          <Route path='/History' component={History} />
          <Route path='/Edit' component={Edit}/>
          <Route path='/EditDetail/:id' component={Edit}/>
        </Switch>
      </Router>
      <Footer />
    </Provider>
    </div>
  );
}

export default App;