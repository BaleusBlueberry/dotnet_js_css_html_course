import { Link } from "react-router-dom";
import React from "react";
import { Action } from "../App";

interface HomeProps {
  state: {
    items: string[];
  };
  dispatcher: React.Dispatch<Action>;
}

function Home({ state, dispatcher }: HomeProps): JSX.Element {
  return (
    <>
      <h1>ToDo Items</h1>
      {state.items.map((myitem, index) => (
        <li key={index}>
          {myitem} | <Link to={`/edit/${myitem}`}>Edit</Link> |{" "}
          <button>Delete</button>
        </li>
      ))}
    </>
  );
}

export { Home };
