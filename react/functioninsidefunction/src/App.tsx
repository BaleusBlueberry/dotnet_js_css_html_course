import React from "react";
import "./App.css";
import PutCounter from "./Components/Counter";

function CreateButton(userInput: number) {
  const newInput = PutCounter(userInput);
  return (
    <>
      <button onClick={() => newInput}>Click here</button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>This is a site that takes a function inside a function</h1>
      <button onClick={() => CreateButton(7)}>Make Button</button>
    </>
  );
}

export default App;
