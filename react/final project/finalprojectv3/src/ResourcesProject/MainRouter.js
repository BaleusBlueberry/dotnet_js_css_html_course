import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../BuildInPages/Header";
import Footer from "../BuildInPages/Footer";
import RegisterPage from "../CreateionOfPages/RegisterPage";
import EditUser from "../CreateionOfPages/EditUser";
import LoginPage from "../BuildInPages/LoginPage";
import RegisterCard from "../CreateionOfPages/RegisterCard";
import { ThemeProvider } from "../contexts/ThemeProvider";
import UserCards from "../BuildInPages/UserCards";
import Cards from "../BuildInPages/CardsPage";
import SingleCard from "../BuildInPages/SingleCard";

function MainRouter() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="*" element={<h1>This page Dose not exists</h1>}></Route>
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/EditUser" element={<EditUser />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterCard/:id" element={<RegisterCard />} />
          <Route path="/RegisterCard" element={<RegisterCard />} />
          <Route path="/UserCards" element={<UserCards />} />
          <Route path="/SingleCard/:id" element={<SingleCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default MainRouter;
