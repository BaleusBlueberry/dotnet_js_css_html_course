import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App({ name, color }) {
  const [emotion, setEmotion] = useState("happy");
  return (
    <div className="App">
      <h1>
        hello its me {name} and i am very {emotion}
        <button onClick={() => setEmotion("angi")}>Angi</button>
      </h1>
    </div>
  );
}

export default App;
