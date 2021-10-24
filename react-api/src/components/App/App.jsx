import React from 'react';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
// import Admin from './pages/Admin';
// import Anime from './pages/Anime';
// import AnimeDetails from './pages/AnimeDetails';
// import Auth from './pages/Auth';
// import Collection from './pages/Collection';
// import Edit from './pages/Edit';
// import EndingsDetails from './pages/EndingsDetails';
// import EpisodeDetails from './pages/EpisodeDetails';
// import History from './pages/History';
// import Home from './pages/Home';
// import OpeningDetails from './pages/OpeningsDetails';
// import User from './pages/User';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './styles/App.css';

// const token = localStorage.getItem('token');
// const user = store.getState().loginReducer.user;

// if (user.lenght > 0 && token) {
//   store.dispatch({type:"AUTH_USER", user:user});
// }else{
//   localStorage.removeItem('token');
// }

const App = () => {
  return (
    <>
      <Router history={browserHistory}>
        <Header />
        <Switch>
          {/*<Route exact path={['/', '/home']} component={Home}/>
          <Route path="/Anime" component={Anime} />
          <Route path="/Admin" component={Admin} />
          <Route path="/AnimeDetails/:id" component={AnimeDetails} />
          <Route path="/Auth" component={Auth} />
          <Route path="/EpisodesDetails/:id" component={EpisodeDetails} />
          <Route path='/OpeningsDetails/:id' component={OpeningDetails}/>
          <Route path='/EndingsDetails/:id' component={EndingsDetails} />
          <Route path="/User" component={User} />
          <Route path="/Collection/:id" component={Collection} />
          <Route path='/History' component={History} />
          <Route path='/Edit' component={Edit}/>
          <Route path='/EditDetail/:id' component={Edit}/> */}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App; 