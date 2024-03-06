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
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getCard } from "../OnlineServices/apiCards";

function SingleCard(editMode = true) {
  const { theme } = useContext(ThemeContext);
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  // reads the id of the page
  const { id } = useParams();
  useEffect(() => {
    async function inner() {
      const response = await getCard(id);
      console.log(response);
      setCard(response.message);
    }
    inner();
  }, []);
  console.log(id);
  console.log(card);
  console.log(card.title);
  const handleFavorateItem = () => {
    console.log(card);
    // setFavorateCardsFunction(card, card.card.Data.Ownermail);
  };

  return (
    <div className="d-flex justify-content-around pb-1 h-100 border-0 rounded overflow-hidden">
      <Card
        key={card._id}
        style={{ width: "24rem", minHeight: "30rem" }}
        className="position-relative shadow-sm"
        data-bs-theme={theme}
        onClick={() => {
          navigate(`/`);
        }}
      >
        <Card.Header data-bs-theme={theme}>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item key="Card">
              <Nav.Link onClick={() => console.log("clicked")}>Card</Nav.Link>
            </Nav.Item>
            {card.address?.houseNumber && (
              <Nav.Item key="Map">
                <Nav.Link onClick={() => console.log("clicked")}>Map</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item key="Edit">
              <Nav.Link href={`/RegisterCard/${card._id}`}>Edit</Nav.Link>
            </Nav.Item>
            <Nav.Item key="Deleate">
              <Nav.Link onClick={() => console.log("attemted to deleate item")}>
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
          {/* if card.image.url empty provide a generic image */}
          {card?.image ? (
            <Card.Img
              variant="top"
              src={card.image.url}
              alt={card.image.alt || "empty alt image"}
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
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleCard;
