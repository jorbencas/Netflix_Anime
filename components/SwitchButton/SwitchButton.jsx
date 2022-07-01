import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import "App.module.css";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button
      className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      onClick={onClick}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
export default SwitchButton;
