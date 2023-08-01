import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import PutCounter from "./Components/Counter";

const ButtonGenerator: React.FC = () => {
  const [buttons, setButtons] = useState<
    { buttonText: number; insideFunction: () => void }[]
  >([]);

  const handleCreateButton = () => {
    const chosenNumber = 1;
    const theCounter = PutCounter(1);
    setButtons((prevButtons) => [
      ...prevButtons,
      { buttonText: chosenNumber, insideFunction: theCounter },
    ]);
  };

  return (
    <div>
      <button onClick={handleCreateButton}>Create Button</button>
      {buttons.map((buttonData, index) => (
        <button key={index} onClick={buttonData.insideFunction}>
          {buttonData.buttonText}
        </button>
      ))}
    </div>
  );
};
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <h1>This is a site that takes a function inside a function</h1>
      <input type="number" id="getnumber" ref={inputRef}></input>
      {/* <button onClick={() => CreateButton(7)}>Make Button</button> */}
      <ButtonGenerator />
    </>
  );
}

export default App;
