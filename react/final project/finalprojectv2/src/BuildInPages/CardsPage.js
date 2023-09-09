import Container from "react-bootstrap/esm/Container";
import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const cards = [
  {
    CardID: "123151",
    Title: "Sands",
    Descreption: "Sands are a in the decert",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
  {
    CardID: "1232342151",
    Title: "lands",
    Descreption: "Sands aasd ww3e reegf",
    Location: "Israel, beer sheva, tzahal 7",
    Picture:
      "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    PictureDescription: "decdfdert",
  },
];

function CardsPage() {
  return (
    <Container>
      <Row>
        {cards.map((card) => (
          <Col>
            <CreateCard info={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardsPage;
