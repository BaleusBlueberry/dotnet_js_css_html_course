import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Action } from "../App";
import React from "react";

interface HomeProps {
  state: {
    items: any;
  };
  id: string;
  dispatcher: React.Dispatch<Action>;
}
interface action {
  type: string;
  indexToEdit: number;
  payload: any;
}

function EditItem({ dispatcher, state }: HomeProps) {
  const { id } = useParams();
  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const [item, setItem] = useState(state.items[id ? +id : 0]);

  // useEffect(() => setItem(state.items[id ? +id : 0]), [state.items, id]);

  const onSubmited = (e: React.FormEvent) => {
    e.preventDefault();

    let action: action = {
      type: "EDIT_ITEM",
      indexToEdit: state.items[state.items.indexOf(id)],
      payload: id,
    };
    console.log(id, id ? +id : 0);

    dispatcher(action);
  };
  return (
    <>
      <h2>Items to edit:</h2>
      <h3>{state.items[state.items.indexOf(id)]}</h3>

      <form onSubmit={onSubmited}>
        <input
          type="text"
          // ref={inputRef}
          // value={item}
          // onChange={(e) => setItem(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export { EditItem };
