import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Admin from './pages/Admin';
import Anime from 'pages/Anime/Anime';
import AnimeDetails from 'pages/AnimeDetails/AnimeDetails';
import Auth from 'pages/Auth/Auth';
// import Collection from './pages/Collection';
// import Edit from './pages/Edit';
// import History from './pages/History';
import Home from 'pages/Home/Home';
// import User from './pages/User';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import './App.css';
import Aleatory from 'pages/Aleatory/Aleatory';

const App = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const user = store.getState().loginReducer.user;

  //   if (user.lenght > 0 && token) {
  //     store.dispatch({type:"AUTH_USER", user:user});
  //   }else{
  //     localStorage.removeItem('token');
  //   }
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path={["/Anime", "/filters/:filter", "/Anime/od", "/Anime/oa"]} component={Anime} />
          <Route path="/AnimeDetails/:id/:kind/:seasion?" component={AnimeDetails} />
          <Route path={["/episodes/:id/:kind","/endings/:id", "/openings/:id", "/aleatory/:id/:kind"]} component={Aleatory} />
          <Route path={["/signup","/signin"]} component={Auth} />
          {/*<Route path="/Admin" component={Admin} />
          
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