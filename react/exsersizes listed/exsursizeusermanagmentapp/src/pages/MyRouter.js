import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogginPage from "./LogginPage";
import UsersPage from "./UsersPage";
import Protected from "./Protected";
import EditUser from "./EditUser";

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogginPage />} />
        <Route
          path="/users"
          element={
            <Protected>
              <UsersPage />
            </Protected>
          }
        />
        <Route
          path="/edit-user/:id"
          element={
            <Protected>
              <EditUser />
            </Protected>
          }
        />
        <Route path="*" element={<h1>This page Dose not exists</h1>}></Route>
        <Route
          path="/add-user"
          element={
            <Protected>
              <EditUser />
            </Protected>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;
