import { useContext } from "react";
import { ListContext } from "./ListContext";
import CardItem from "./CardItem";
import { ThemeContext } from "./ThemeContext";
import CardDetails from "./CardDetailes";

function Cards() {
  const { items, selectedItem } = useContext(ListContext);
  const { theme } = useContext(ThemeContext);

  if (selectedItem) {
    return (
      <>
        <h2 className={`text-${theme}`}>Selected item:</h2>
        <CardDetails />
      </>
    );
  }

  return (
    <div className="container">
      <h1 className={`text-${theme === "dark" ? "light" : "dark"}`}>
        Card list
      </h1>
      <div className="row">
        {items.map((user) => (
          <CardItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
