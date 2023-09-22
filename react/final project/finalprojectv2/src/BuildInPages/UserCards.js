import Container from "react-bootstrap/esm/Container";
import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Spinner from "react-bootstrap/Spinner";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { UserContext } from "../contexts/UserContext";

function UserCards() {
  const { userCards, loading } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  console.log(userCards);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center mt-5">
        <Spinner variant="secondary" animation="border" />
      </Container>
    );
  }
  return (
    <Container>
      {Array.isArray(userCards) && userCards.length ? (
        <Row>
          {userCards.map((card) => (
            <Col key={card.Data.CardID}>
              <CreateCard card={card} />
            </Col>
          ))}
        </Row>
      ) : (
        <h1
          className={`text-center text-${theme === "dark" ? "light" : "dark"}`}
        >
          There are no Cards that belong to the user
        </h1>
      )}
    </Container>
  );
}

export default UserCards;
