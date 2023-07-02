import "./App.css";
import { useReducer } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AddItem } from "./Pages/AddItem";
import { EditItem } from "./Pages/EditItem";

const initualState = {
  items: [],
};

function reducer(state, action) {
  let itemsToCopy = [...state.items];
  switch (action.type) {
    case "ADD_ITEM":
      return { items: [...state.items, action.payload] };
    case "DELETE_ITEM":
      itemsToCopy.splice(action.payload.index, 1);
      return { itemsToCopy };
    case "EDIT_ITEM":
      itemsToCopy[action.payload.index] = action.payload;
      return { itemsToCopy };

    default:
      return state;
  }
}

function App() {
  const [state, dispatcher] = useReducer(reducer, initualState);
  return (
    <Router>
      <h1>Welcome to my list app</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Item</Link>
        </li>
        <li>
          <Link to="/edit">Edit Item</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/"
          Component={() => <Home state={state} dispatcher={dispatcher} />}
        />
        <Route
          path="/add"
          Component={() => <AddItem state={state} dispatcher={dispatcher} />}
        />
        <Route
          path="/edit"
          Component={() => <EditItem state={state} dispatcher={dispatcher} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
