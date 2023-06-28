import { react, useRef, useState } from "react";

function useMyHook(startingValue) {
  const [value, setValue] = useState(startingValue);
  const ref = useRef();

  return [
    // used in spread
    {
      // state value
      value,
      // onchange event
      onChange: (e) => {
        setValue(e.target.value);
      },
      ref,
    },
    // reset function
    () => setValue(startingValue),
    // ref,

    () => {
      if (value !== "") {
        return false;
      }
      ref.current.focus();
      return true;
    },
  ];
}

function Controlled() {
  const [name, resetName, nameFocuser] = useMyHook("");
  const [color, resetColor] = useMyHook("#000000");
  const [animal, resetAnimal, animalFocuser] = useMyHook("cat");

  // const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      `you wrote ${name.value} and selected the color ${color.value}`
    );

    // if (nameFocuser() || animalFocuser()) {
    //   return;
    // }

    // run the functions in the variables and if someone returns true, use return
    if ([nameFocuser, animalFocuser].some((x) => x())) {
      return;
    }

    // set focus to the name
    resetName();
    resetColor();
    resetAnimal();
    // inputRef.current.focus();
  };
  return (
    <>
      <h1>
        you wrote {name.value}, and selected the color {color.value} and the
        animal is {animal.value}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          {...name}
          // ref={inputRef}
          placeholder="name of the color"
        ></input>
        <input type="color" {...color}></input>
        <input type="text" {...animal}></input>
        <button>Go</button>
      </form>
    </>
  );
}

export { Controlled };
