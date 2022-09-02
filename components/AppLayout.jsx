import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext.jsx";
import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";
// import LateralBar from "./UI/LateralBar";

const AppLayout = ({ children }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div data-theme={darkMode}>
      <Header />
      {/* <LateralBar /> */}
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
