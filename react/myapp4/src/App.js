import "./App.css";
import { useReducer } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AddItem } from "./Pages/AddItem";
import { EditItem } from "./Pages/EditItem";

const initualState = {
  items: ["111", "222", "333"],
};

function reducer(state, action) {
  let itemsToCopy = { ...state };
  switch (action.type) {
    case "ADD_ITEM":
      console.log("added item " + action.payload);
      return { items: [...state.items, action.payload] };

    case "DELETE_ITEM":
      // itemsToCopy.splice(action.payload.index, 1);
      return { itemsToCopy };

    case "EDIT_ITEM":
      // NO!!!!!!!!!!!!!!!!!! we don't change the state directly
      //  NO -> state.items[action.indexToEdit] = action.payload;
      itemsToCopy.items[action.indexToEdit] = action.payload;
      console.log("done edit");

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
          Component={() => <AddItem dispatcher={dispatcher} />}
        />
        <Route
          path="/edit/:id"
          Component={() => <EditItem state={state} dispatcher={dispatcher} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
