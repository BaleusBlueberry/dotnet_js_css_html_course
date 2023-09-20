import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {
  Heart,
  HeartFill,
  AppIndicator,
  Facebook,
  TelephoneFill,
} from "react-bootstrap-icons";
import { useContext, useState } from "react";
import GoogleMapReact from "google-map-react";
import { ThemeContext } from "../contexts/ThemeProvider";

function CreateCard(props) {
  const { theme } = useContext(ThemeContext);

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
            {props.card.Data.HouseNumber && (
              <Nav.Item key="Map">
                <Nav.Link onClick={() => handleOpenMap()}>Map</Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={props.card.Data.Picture}
            alt={props.card.Data.PictureDescription}
          />
          <Card.Title>{props.card.Data.Title}</Card.Title>
          <Card.Text key="descreption">{props.card.Data.Descreption}</Card.Text>
          {props.card.Data.PhoneNumber && (
            <Card.Text className="d-flex align-items-center" key="PhoneNumber">
              <TelephoneFill></TelephoneFill>
              <a
                href={`tel:${props.card.Data.PhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.card.Data.PhoneNumber}
              </a>
            </Card.Text>
          )}
          {props.card.Data.Facebook && (
            <Card.Text className="d-flex align-items-center" key="Website">
              <Facebook></Facebook>
              <a
                href={props.card.Data.Facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Link
              </a>
            </Card.Text>
          )}
          {props.card.Data.Website && (
            <Card.Text className="d-flex align-items-center" key="Website">
              <AppIndicator></AppIndicator>
              <a
                href={props.card.Data.Website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Link
              </a>
            </Card.Text>
          )}
          <Row>
            <Button className="d-flex justify-content-center">
              <HeartFill></HeartFill>
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCard;
