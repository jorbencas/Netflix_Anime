import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext.jsx";
import "./SwitchButton.module.css";

export default function SwitchButton() {
  const { state, dispatch } = useContext(ThemeContext);
  const { darkMode } = state;
  const onClick = () => {
    if (darkMode) {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
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
}
