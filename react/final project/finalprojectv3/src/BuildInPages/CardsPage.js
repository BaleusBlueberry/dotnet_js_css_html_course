import Container from "react-bootstrap/esm/Container";
import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { getAllCards } from "../OnlineServices/apiCards";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    async function inner() {
      const response = await getAllCards();
      setCards(response.message);
    }
    inner();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      {/* show 1 card when small 3 when medium and 5 when large */}
      <Row xs={1} md={3} lg={5} className="g-4">
        {cards.map((card) => (
          <Col key={card._id}>
            <CreateCard card={card} isUserCard={false} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cards;
