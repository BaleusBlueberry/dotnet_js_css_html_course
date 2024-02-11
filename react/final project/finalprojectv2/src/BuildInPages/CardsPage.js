import Container from "react-bootstrap/esm/Container";
import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { UserContext } from "../contexts/UserContext";
import { getAllCards } from "../OnlineServices/apiCards";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function inner() {
      const response = await getAllCards();
      console.log(response);
      setCards(response.message);
    }
    inner();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      <ul>
        {cards.map((card) => (
          <CreateCard key={card._id} card={card} />
        ))}
      </ul>
    </>
  );
};

export default Cards;
