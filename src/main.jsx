import {
  StrictMode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import ReactDOM from "react-dom/client";
import { LangProvider } from "./context/LangContext.jsx";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import RouterApp from "./router/router.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import "./styles/App.css";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";

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

// returns the current hash location (excluding the '#' symbol)
const currentLoc = () => window.location.hash.replace("#", "") || "/";

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLoc());

  useEffect(() => {
    const handler = () => setLoc(currentLoc());

    // subscribe on hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to) => (window.location.hash = to), []);
  return [loc, navigate];
};

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
          <Switch>
            <Route path="/info">
              <Redirect to="/about" />
            </Route>
            <Route path="/">This example uses hash-based routing.</Route>
            <Route path="/about">
              <article>
                <h1>Wouter API</h1>

                <p>
                  A tiny routing solution for modern React apps that relies on
                  Hooks. A router you wanted so bad in your project!
                </p>
                <p>
                  Wouter comes with two kinds of APIs: low-level{" "}
                  <a
                    href="https://reactjs.org/docs/hooks-intro.html"
                    rel="nofollow"
                  >
                    React Hooks
                  </a>{" "}
                  API and more traditional component-based API similar to React
                  Router's one.
                </p>
                <p>
                  <ul>
                    <li>
                      Zero dependency, only <strong>1151 B</strong> gzipped vs
                      17KB{" "}
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
                      No top-level <code>&lt;Router /&gt;</code> component, it
                      is <strong>fully optional</strong>.
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
                      Has hook-based API for more granular control over routing
                      (like animations):{" "}
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
          </Switch>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>
);
