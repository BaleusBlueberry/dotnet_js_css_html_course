import React from "react";
import { Action } from "../App";
import { useRef } from "react";

interface HomeProps {
  dispatcher: React.Dispatch<Action>;
  // inputRef: React.RefObject<HTMLInputElement>;
}

function AddItem({ dispatcher }: HomeProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // alert(inputRef.current.value);

    if (inputRef.current?.value) {
      dispatcher({
        type: "ADD_ITEM",
        payload: inputRef.current.value,
        indexToEdit: 0,
      });
    }
  };

  return (
    <>
      <h1>items To Edit</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text"></input>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}

export { AddItem };
