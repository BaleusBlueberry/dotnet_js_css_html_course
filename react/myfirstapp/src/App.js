// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App({ name }) {
  const [emotion, setEmotion] = useState("happy");
  const [color, setcolor] = useState("red");

  const handleColorChange = function () {
    if (color === "blue") {
      setcolor("red");
    } else {
      setcolor("blue");
    }
  };
  return (
    <div className="App">
      <h1>
        hello its me {name} and i am very {emotion}
        <button onClick={() => setEmotion("angi")}>Angi</button>
        <button onClick={() => setEmotion("happy")}>happy</button>
      </h1>
      <button style={{ backgroundColor: color }} onClick={handleColorChange}>
        {color}
      </button>
    </div>
  );
}

export default App;
