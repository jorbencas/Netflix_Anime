import { useContext } from "react";
import Footer from "./Footer/index.jsx";
import Header from "./Header/index.jsx";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext.jsx";

export default function AppLayout({ children }) {
  return (
    <ThemeProvider>
      <AppLayoutContainer children={children} />
    </ThemeProvider>
  );
}

const AppLayoutContainer = ({ children }) => {
  const { state } = useContext(ThemeContext);
  const { darkMode } = state;
  return (
    <div data-theme={darkMode}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
