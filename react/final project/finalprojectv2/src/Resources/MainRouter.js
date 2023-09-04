import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "../Pages/CardsPage";
import Header from "../BuildInPages/Header";
import Footer from "../BuildInPages/Footer";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import RegisterCard from "../Pages/RegisterCard";

function MainRouter() {
  return (
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
  );
}

export default MainRouter;
