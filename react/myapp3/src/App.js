import logo from "./logo.svg";
import "./App.css";
import { Uncontrolled } from "./components/Uncontrolled";
import { Controlled } from "./components/Controlled";
import { GitHub } from "./components/GitHub";

function App() {
  return (
    <>
      <h1>My Site</h1>
      {/* <Uncontrolled></Uncontrolled> */}
      <Controlled></Controlled>
      {/* <GitHub></GitHub> */}
    </>
  );
}

export default App;
