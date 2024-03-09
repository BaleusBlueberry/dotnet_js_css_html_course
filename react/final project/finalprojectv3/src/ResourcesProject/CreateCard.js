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
  EnvelopeAtFill,
  Bank2,
} from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { DeleateCard, LikeCard } from "../OnlineServices/apiCards";

function CreateCard({ card, isUserCard }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("user"))?._id;
  const [favorated, setFavirated] = useState(
    card.likes.find((id) => id === userId)
  );

  function navigation(path) {
    if (isUserCard) {
      navigate("../" + path);
    } else {
      navigate(path);
    }
  }

  const handleFavorateItem = () => {
    const response = LikeCard(card._id);
    setFavirated(!favorated);
  };
  const handleDelCard = () => {
    const response = DeleateCard(card._id, { bizNumber: card.bizNumber });
  };

  return (
    <div className="d-flex justify-content-around pb-1 h-100 border-0 rounded overflow-hidden">
      <Card
        key={card._id}
        style={{ width: "24rem", height: "40rem", minHeight: "30rem" }}
        className="position-relative shadow-sm"
        data-bs-theme={theme}
      >
        <Card.Header data-bs-theme={theme}>
          <Nav variant="tabs" defaultActiveKey="#first">
            {isUserCard === true ? (
              <>
                <Nav.Item key="Edit">
                  <Nav.Link href={`/UpdateCardPage/${card._id}`}>Edit</Nav.Link>
                </Nav.Item>
                <Nav.Item key="Deleate">
                  <Nav.Link onClick={() => handleDelCard()}>
                    <Trash />
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : null}
            <Nav.Item key="Favorate">
              <Nav.Link onClick={() => handleFavorateItem()}>
                {favorated ? <HeartFill /> : <Heart />}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          {/* if card.image.url empty provide a generic image */}
          {card?.image ? (
            <Card.Img
              variant="top"
              src={card.image.url}
              alt={card.image.alt || "empty alt image"}
              onClick={() => {
                navigation(`SingleCard/${card._id}`);
              }}
            />
          ) : (
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
              alt="Busness icon"
            />
          )}

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
              {card.phone && (
                <Col>
                  <a
                    href={`mailto:${card.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EnvelopeAtFill size="30"></EnvelopeAtFill>
                  </a>
                </Col>
              )}
              {card.web && (
                <Col>
                  <a
                    href={`https://${card.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bank2 size="30"></Bank2>
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
