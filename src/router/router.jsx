// import Admin from './pages/Admin';
// import Anime from "pages/Anime/Anime";
// import AnimeDetails from "pages/AnimeDetails/AnimeDetails";
// import Auth from "pages/Auth/Auth";
// import Collection from './pages/Collection';
// import History from './pages/History';
import Home from "../pages/Home/Home.jsx";
// import User from '../pages/User';
// import Aleatory from "pages/Aleatory/Aleatory";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "../hooks/useHashLocation.jsx";
import Edit from "../pages/Edit/Edit.jsx";

const RouterApp = () => {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Edit} />
        {/*<Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route
            path={["/Anime", "/filters/:filter", "/Anime/od", "/Anime/oa"]}
            component={Anime}
          />
          <Route
            path="/AnimeDetails/:id/:kind/:seasion?"
            component={AnimeDetails}
          />
          <Route
            path={[
              "/episodes/:id/:kind",
              "/endings/:id",
              "/openings/:id",
              "/aleatory/:id/:kind",
            ]}
            component={Aleatory}
          />
          <Route path={["/signup", "/signin"]} component={Auth} />
          <Route path="/Admin" component={Admin} />
          
          <Route path='/OpeningsDetails/:id' component={OpeningDetails}/>
          <Route path='/EndingsDetails/:id' component={EndingsDetails} />
          <Route path="/User" component={User} />
          <Route path="/Collection/:id" component={Collection} />
          <Route path='/History' component={History} />
          <Route path='/Edit' component={Edit}/>
          <Route path='/EditDetail/:id' component={Edit}/> */}
      </Switch>
    </Router>
  );
};
export default RouterApp;
