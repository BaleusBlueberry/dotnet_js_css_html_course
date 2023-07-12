import React from "react";
import { useReducer } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { AddItem } from "./Pages/AddItem";
import { EditItem } from "./Pages/EditItem";

export interface AppState {
  items: string[];
}

export interface Action {
  type: string;
  payload: any;
  indexToEdit: number;
}

const initualState: AppState = {
  items: ["111", "222", "333"],
};

function reducer(state: AppState, action: Action): AppState {
  let itemsToCopy = { ...state };
  switch (action.type) {
    case "ADD_ITEM":
      console.log("added item " + action.payload);
      return { items: [...state.items, action.payload] };

    // case "DELETE_ITEM":
    //   itemsToCopy.items.splice(action.payload.index, 1);
    //   return { ...itemsToCopy };

    case "EDIT_ITEM":
      itemsToCopy.items[action.indexToEdit] = action.payload;
      console.log("done edit");
      return { ...itemsToCopy };

    default:
      return state;
  }
}

function App(): JSX.Element {
  const [state, dispatcher] = useReducer(reducer, initualState);
  return (
    <Router>
      <h1>my first app</h1>
      <hr />
      <ul className="clickable-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Item</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/"
          Component={() => <Home state={state} dispatcher={dispatcher} />}
        ></Route>
        <Route
          path="/add"
          Component={() => <AddItem dispatcher={dispatcher} />}
        ></Route>
        <Route
          path="/edit/:id"
          Component={() => (
            <EditItem state={state} dispatcher={dispatcher} id={""} />
          )}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
