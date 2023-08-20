import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ListContext } from "./ListContext";

function CardItem({ user }) {
  const { theme } = useContext(ThemeContext);
  const { setSelectItems } = useContext(ListContext);

  return (
    <div className="col-4 mb-4">
      <div
        className={`card bg-${theme === "dark" ? "light" : "dark"}`}
        onClick={() => {
          setSelectItems(user);
        }}
      >
        <img className="card-img-top" src={user.image} alt="" />
        <div className={`card-body`}>
          <h5 className={`card-title text-${theme}`}>{user.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
