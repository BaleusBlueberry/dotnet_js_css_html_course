import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import { Clients } from "./Pages/Clients";
import { OurProjects } from "./Pages/OurProjects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AboutUs" element={<AboutUs />}>
        <Route path="Clients" element={<Clients />} />
        <Route path="/OurProjects" element={<OurProjects />} />
      </Route>
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);
