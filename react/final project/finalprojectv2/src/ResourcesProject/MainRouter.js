import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../BuildInPages/Header";
import Footer from "../BuildInPages/Footer";
import RegisterPage from "../CreateionOfPages/RegisterPage";
import LoginPage from "../BuildInPages/LoginPage";
import RegisterCard from "../CreateionOfPages/RegisterCard";
import { ThemeProvider } from "../contexts/ThemeProvider";
import UserCards from "../BuildInPages/UserCards";
import Cards from "../BuildInPages/CardsPage";

function MainRouter() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="*" element={<h1>This page Dose not exists</h1>}></Route>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterCard/:id" element={<RegisterCard />} />
          <Route path="/RegisterCard" element={<RegisterCard />} />
          <Route path="/UserCards" element={<UserCards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default MainRouter;
