import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function EditItem({ dispatcher, state }) {
  const { id } = useParams();
  const inputRef = useRef();
  console.log(state);
  const [item, setItem] = useState(state.items[id]);

  useEffect(() => setItem(state.items[id]), [state.items, id]);

  const onSubmited = (e) => {
    e.preventDefault();

    let action = {
      type: "EDIT_ITEM",
      indexToEdit: id,
      payload: item,
    };

    dispatcher(action);
  };
  return (
    <>
      <h2>Items to edit:</h2>
      <h3>{state.items[id]}</h3>

      <form onSubmit={onSubmited}>
        <input
          type="text"
          ref={inputRef}
          value={item}
          // onChange={(e) => setItem(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export { EditItem };
