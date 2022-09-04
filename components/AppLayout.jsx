import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext.jsx";
import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";

const AppLayout = ({ children }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div data-theme={darkMode}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default AppLayout;
