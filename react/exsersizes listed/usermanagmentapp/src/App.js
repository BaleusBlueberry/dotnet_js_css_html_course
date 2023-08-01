import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogginPage from "./pages/LogginPage";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogginPage />}></Route>
        {/* <Route path="about" element={<About />}></Route>
        <Route path="products" element={<Products />}></Route> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
