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
} from "react-bootstrap-icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useNavigate } from "react-router-dom";

function CreateCard(props, editMode = true) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleOpenMap = () => {
    const encodedAddress = encodeURIComponent(
      `${props.card.Data.HouseNumber} ${props.card.Data.Street} ${props.card.Data.City} ${props.card.Data.State} ${props.card.Data.Country} ${props.card.Data.ZipCode}`
    );
    const googleAdress = `https://www.google.com/maps/search/?api=1&q=${encodedAddress}`;

    window.open(googleAdress, "_blank");
  };

  return (
    <div className="d-flex justify-content-around pb-5 h-100 border-0 rounded">
      <Card
        key={props.card.Data.CardID}
        style={{ width: "18rem" }}
        className="position-relative shadow-sm"
        data-bs-theme={theme}
      >
        <Card.Header data-bs-theme={theme}>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item key="Card">
              <Nav.Link onClick={() => handleOpenMap()}>Card</Nav.Link>
            </Nav.Item>
            <Nav.Item key="Edit">
              <Nav.Link href={`/RegisterCard/${props.card.ItemID}`}>
                Edit
              </Nav.Link>
            </Nav.Item>
            {props.card.Data.HouseNumber && (
              <Nav.Item key="Map">
                <Nav.Link onClick={() => handleOpenMap()}>Map</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.card.Data.Title}</Card.Title>
          <Card.Img
            variant="top"
            src={props.card.Data.Picture}
            alt={props.card.Data.PictureDescription}
          />

          <Card.Text key="descreption">{props.card.Data.Descreption}</Card.Text>
          <div className="d-flex justify-content-center">
            <Row className="pb-3">
              {props.card.Data.PhoneNumber && (
                <Col>
                  <a
                    href={`tel:${props.card.Data.PhoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TelephoneFill size="30"></TelephoneFill>
                  </a>
                </Col>
              )}
              {props.card.Data.Facebook && (
                <Col>
                  <a
                    href={props.card.Data.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size="30"></Facebook>
                  </a>
                </Col>
              )}
              {props.card.Data.Website && (
                <Col>
                  <a
                    href={props.card.Data.Website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Buildings size="30"></Buildings>
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
