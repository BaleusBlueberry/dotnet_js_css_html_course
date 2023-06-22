import { useState, useReducer } from "react";

function MyCheckbox() {
  const [checked, setChecked] = useReducer((current) => !current, false);

  // const cbChanged = () => {
  //   setChecked((current) => !current);
  // };
  return (
    <>
      <input type="checkbox" value={checked} onChange={setChecked}></input>
      <label>{checked ? "Checked" : "Not Checked"}</label>
    </>
  );
}

export { MyCheckbox };
