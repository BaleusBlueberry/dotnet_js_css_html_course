import { Link } from "react-router-dom";

function Home({ state, dispatcher }) {
  return (
    <>
      <h1>ToDo Items</h1>
      {state.items.map((item, index) => (
        <li key={index}>
          {item} | <Link to="edit">Edit</Link> | <button>Delete</button>
        </li>
      ))}
    </>
  );
}

export { Home };
