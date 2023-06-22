// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
// import { doStuff } from "./components/MyModule.js";
import { MyDataTable } from "./components/MyDataTable.js";
import { MyEmotions } from "./components/MyEmotions.js";
import { MyReducer } from "./components/MyReducer.js";
import { MyCheckbox } from "./components/MyCheckbox.js";

function App() {
  return (
    <>
      <MyReducer></MyReducer>
      <MyCheckbox></MyCheckbox>
      {/* <MyEmotions></MyEmotions>

      <MyDataTable></MyDataTable> */}
    </>
  );
}
export default App;
