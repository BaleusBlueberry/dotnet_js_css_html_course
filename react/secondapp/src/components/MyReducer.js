import { useReducer } from "react";

function dispatch(currentState, action) {
  switch (action.type) {
    case "-":
      return { count: currentState.count - 1 };
    case "+":
      return { count: currentState.count + 1 };
    case "**":
      return { count: currentState.count * currentState.count };
    default:
      console.log("no action for type " + action.type);
      return currentState;
  }
}

function MyReducer() {
  const [state, setState] = useReducer(dispatch, { count: 0 });

  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => setState({ type: "+" })}>+</button>
      <button onClick={() => setState({ type: "-" })}>-</button>
      <button onClick={() => setState({ type: "**" })}>**</button>
    </>
  );
}

export { MyReducer };
