import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext.jsx";
import logo from "./logo.svg";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <button
        className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>
    </>
  );
};
export default Counter;
