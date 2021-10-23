import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { Router, browserHistory } from 'react-router';
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
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

// const token = localStorage.getItem('token');
// const user = store.getState().loginReducer.user;

// if (user.lenght > 0 && token) {
//   store.dispatch({type:"AUTH_USER", user:user});
// }else{
//   localStorage.removeItem('token');
// }

export default class App extends React.Component{  
  constructor(props){
    super(props);  
  }  

  render(){
    return (
      <Fragment>
        <Header />
        <Router history={browserHistory}>
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
        </Router>
        <Footer />
      </Fragment>
    );
  }
}