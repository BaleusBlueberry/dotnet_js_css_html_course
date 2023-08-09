// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import MyRouter from "./pages/MyRouter";

function App() {
  localStorage.clear("userData");
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      let users = [
        {
          id: 132,
          firstName: "John",
          lastName: "karlson",
          email: "a@b.com",
          password: "12345",
        },
      ];
      localStorage.setItem("userData", JSON.stringify(users));
    }
  }, []);
  return <MyRouter />;
}

export default App;
