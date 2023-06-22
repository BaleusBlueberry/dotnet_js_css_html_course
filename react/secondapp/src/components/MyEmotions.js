import { useEffect, useState } from "react";

function MyEmotions() {
  const [emotion, setEmotion] = useState("happy");

  const changeEmotion = () => {
    if (emotion === "happy") {
      setEmotion("sad");
    } else {
      setEmotion("happy");
    }
  };

  useEffect(() => {
    if (emotion === "sad") {
      console.log("there is a sad state");
    }
  }, [emotion]);

  return (
    <>
      <p>My emotion is {emotion}</p>
      <button onClick={changeEmotion}>change Emotion</button>
    </>
  );
}

export { MyEmotions };
