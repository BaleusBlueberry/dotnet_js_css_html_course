import { useRef } from "react";

function AddItem({ dispatcher }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(inputRef.current.value);

    dispatcher({
      type: "ADD_ITEM",
      payload: inputRef.current.value,
    });
  };

  return (
    <>
      <h1>Items to add:</h1>

      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">Add itme</button>
      </form>
    </>
  );
}
export { AddItem };
