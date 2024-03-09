import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {
  Heart,
  HeartFill,
  TelephoneFill,
  Trash,
  EnvelopeAtFill,
  Bank2,
} from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useParams } from "react-router-dom";
import { DeleateCard, LikeCard, getCard } from "../OnlineServices/apiCards";

function SingleCard(editMode = true) {
  const { theme } = useContext(ThemeContext);
  const [card, setCard] = useState([]);
  // reads the id of the page
  const { id } = useParams();

  const userId = JSON.parse(localStorage.getItem("user"))?._id;

  const [favorated, setFavirated] = useState(false);

  const [isUserCard, setIsUserCard] = useState(false);

  const handleFavorateItem = () => {
    const response = LikeCard(card._id);
    setFavirated(!favorated);
  };

  const handleDelCard = () => {
    const response = DeleateCard(card._id, { bizNumber: card.bizNumber });
  };

  useEffect(() => {
    async function inner() {
      const response = await getCard(id);
      setCard(response.message);

      if (response.message.likes !== null) {
        setFavirated(response.message.likes.find((id) => id === userId));
      } else {
        setFavirated(false);
      }

      if (response.message.user_id === userId) {
        setIsUserCard(true);
      } else {
        setIsUserCard(false);
      }
    }
    inner();
  }, []);

  return (
    <div className="d-flex justify-content-around pb-1 h-100 border-0 rounded overflow-hidden">
      <Card
        key={card._id}
        style={{ width: "24rem", minHeight: "30rem" }}
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
              href={`/*`}
            />
          ) : (
            <Card.Img
              variant="top"
              src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
              alt="Busness icon"
            />
          )}

          <Card.Text key="descreption">{card.description}</Card.Text>
          {card.address ? (
            <Card.Text key="location">
              {card.address.country}, {card.address.city},
              {card.address.houseNumber}, {card.address.country},{" "}
              {card.address.zip}
            </Card.Text>
          ) : null}
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

export default SingleCard;
