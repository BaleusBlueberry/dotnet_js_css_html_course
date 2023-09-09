import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "../BuildInPages/CardsPage";
import Header from "../BuildInPages/Header";
import Footer from "../BuildInPages/Footer";
import RegisterPage from "../CreateionOfPages/RegisterPage";
import LoginPage from "../BuildInPages/LoginPage";
import RegisterCard from "../CreateionOfPages/RegisterCard";
import { useContext, useEffect } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeProvider";

function MainRouter() {
  const { theme } = useContext(ThemeContext);

  const themeClass =
    theme === "light" ? "bg-light text-dark" : "bg-dark text-white";

  useEffect(() => {
    document.body.className = themeClass;
  }, [themeClass]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="*" element={<h1>This page Dose not exists</h1>}></Route>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterCard" element={<RegisterCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default MainRouter;
