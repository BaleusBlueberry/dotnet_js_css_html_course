import { react, useRef, useState } from "react";

function Uncontrolled() {
  const formSaved = [];

  const tbName = useRef();
  const csColor = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // taking the value of the string and color of the input
    const name = tbName.current.value;
    const color = csColor.current.value;

    alert(`the name of the color is ${name} and the color is ${color}`);

    // revert the the values to defult values
    tbName.current.value = "";
    csColor.current.value = "#000000";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={tbName} placeholder="name of the color"></input>
        <input type="color" ref={csColor}></input>
        <button>Do</button>
      </form>
    </>
  );
}

export { Uncontrolled };
