import Container from "react-bootstrap/esm/Container";
import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { UserContext } from "../contexts/UserContext";

function CardsPage() {
  const { cards, loading } = useContext(UserContext);
  const { theme } = useState(ThemeContext);

  console.log(cards);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Spinner variant="secondary" animation="border" />
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <Col key={card.Data.CardID}>
            <CreateCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsPage;
