import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {
  Heart,
  HeartFill,
  Buildings,
  Facebook,
  TelephoneFill,
  Trash,
} from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { deleteItem } from "../OnlineServices/api";
import { UserContext } from "../contexts/UserContext";

function CreateCard(card, editMode = true) {
  const { theme } = useContext(ThemeContext);
  const { token, setReloadCards, setFavorateCardsFunction } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handledeleteItem = async (e) => {
    await deleteItem(token, "Cards", card.card.Data.CardID)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("didn't trash the panda");
      })
      .finally(() => {
        setReloadCards(Math.random() * 1000);
      });
  };

  const handleFavorateItem = () => {
    console.log(card);
    setFavorateCardsFunction(card, card.card.Data.Ownermail);
  };

  return (
    <div className="d-flex justify-content-around pb-5 h-100 border-0 rounded">
      <Card
        key={card._id}
        style={{ width: "18rem" }}
        className="position-relative shadow-sm"
        data-bs-theme={theme}
      >
        <Card.Header data-bs-theme={theme}>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item key="Card">
              <Nav.Link onClick={() => console.log("clicked")}>Card</Nav.Link>
            </Nav.Item>
            {card.address.houseNumber && (
              <Nav.Item key="Map">
                <Nav.Link onClick={() => console.log("clicked")}>Map</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item key="Edit">
              <Nav.Link href={`/RegisterCard/${card._id}`}>Edit</Nav.Link>
            </Nav.Item>
            <Nav.Item key="Deleate">
              <Nav.Link onClick={() => handledeleteItem()}>
                <Trash />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item key="Favorate">
              <Nav.Link onClick={() => handleFavorateItem()}>
                <Heart />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Img variant="top" src={card.image.url} alt={card.image.alt} />

          <Card.Text key="descreption">{card.description}</Card.Text>
          <div className="d-flex justify-content-center">
            <Row className="pb-3">
              {card.phone && (
                <Col>
                  <a
                    href={`tel:${card.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TelephoneFill size="30"></TelephoneFill>
                  </a>
                </Col>
              )}
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCard;
