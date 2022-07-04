// import Admin from '../pages/Admin';
// import Anime from "../pages/Anime/Anime";
// import AnimeDetails from "../pages/AnimeDetails/AnimeDetails";
// import Auth from "../pages/Auth/Auth";
// import Collection from '../pages/Collection';
// import History from '../pages/History';
// import Home from "../pages/Home/Home.jsx";
// import User from '../pages/User';
// import Aleatory from "../pages/Aleatory/Aleatory";
import { Redirect, Route, Switch } from "wouter";
import { useHashLocation } from "../hooks/useHashLocation.jsx";
import Edit from "../pages/Edit/Edit.jsx";
import Counter from "../components/counter/counter.jsx";

const RouterApp = () => {
  return (
    // <Router hook={useHashLocation}>
<<<<<<< HEAD:router/router.jsx
=======
    <Switch>
      <Route path="/info">
        <Redirect to="/about" />
      </Route>
      <Route path="/">This example uses hash-based routing.</Route>
      <Route path="/about">
        <article>
          <h1>Wouter API</h1>

          <p>
            A tiny routing solution for modern React apps that relies on Hooks.
            A router you wanted so bad in your project!
          </p>
          <p>
            Wouter comes with two kinds of APIs: low-level{" "}
            <a href="https://reactjs.org/docs/hooks-intro.html" rel="nofollow">
              React Hooks
            </a>{" "}
            API and more traditional component-based API similar to React
            Router's one.
          </p>
          <p>
            <ul>
              <li>
                Zero dependency, only <strong>1151 B</strong> gzipped vs 17KB{" "}
                <a href="https://github.com/ReactTraining/react-router">
                  React Router
                </a>
                .
              </li>
              <li>
                Supports both <strong>React</strong> and{" "}
                <strong>
                  <a href="https://preactjs.com/" rel="nofollow">
                    Preact
                  </a>
                </strong>
                ! Read{" "}
                <em>
                  <a href="#preact-support">"Preact support" section</a>
                </em>{" "}
                for more details.
              </li>
              <li>
                No top-level <code>&lt;Router /&gt;</code> component, it is{" "}
                <strong>fully optional</strong>.
              </li>
              <li>
                Mimics{" "}
                <a href="https://github.com/ReactTraining/react-router">
                  React Router
                </a>
                's best practices by providing familiar
                <strong>
                  <a href="#route-pathpattern-">
                    <code>Route</code>
                  </a>
                </strong>
                ,{" "}
                <strong>
                  <a href="#link-hrefpath-">
                    <code>Link</code>
                  </a>
                </strong>
                ,{" "}
                <strong>
                  <a href="#switch-">
                    <code>Switch</code>
                  </a>
                </strong>{" "}
                and{" "}
                <strong>
                  <a href="#redirect-topath-">
                    <code>Redirect</code>
                  </a>
                </strong>{" "}
                components.
              </li>
              <li>
                Has hook-based API for more granular control over routing (like
                animations):{" "}
                <strong>
                  <a href="#uselocation-hook-working-with-the-history">
                    <code>useLocation</code>
                  </a>
                </strong>
                ,{" "}
                <strong>
                  <a href="#useroute-the-power-of-hooks">
                    <code>useRoute</code>
                  </a>
                </strong>{" "}
                and{" "}
                <strong>
                  <a href="#userouter-accessing-the-router-object">
                    <code>useRouter</code>
                  </a>
                </strong>
                .
              </li>
            </ul>
          </p>
        </article>
      </Route>
      <Route path="/:anything*">
        <center>
          <b>404:</b> Sorry, this page isn't ready yet!
        </center>
      </Route>

>>>>>>> parent of d08a803... Revert "Test Router":src/router/router.jsx
      {/* <Route path="/">
          <>
            <h1>Hola Mundo</h1>
          </>
        </Route>
        <Route path="/fufu">
          <Counter />
        </Route>
        <Route path="/edit" component={Edit} /> */}
<<<<<<< HEAD:router/router.jsx
      /*<Route path="/about" component={About} />
=======
      {/*<Route path="/about" component={About} />
>>>>>>> parent of d08a803... Revert "Test Router":src/router/router.jsx
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
          <Route path='/EditDetail/:id' component={Edit}/> */}
<<<<<<< HEAD:router/router.jsx

=======
    </Switch>
>>>>>>> parent of d08a803... Revert "Test Router":src/router/router.jsx
    // </Router>
  );
};
export default RouterApp;
