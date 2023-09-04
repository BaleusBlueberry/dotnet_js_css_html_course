import Container from "react-bootstrap/esm/Container";
import CreateCard from "../Resources/CreateCard";

const cards = {
  CardID: "123151",
  Title: "Sands",
  Descreption: "Sands are a in the decert",
  Location: "Israel, beer sheva, tzahal 7",
  Picture:
    "https://images.unsplash.com/photo-1583668928307-a9c4fc140c48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
  PictureDescription: "decert",
};

function CardsPage() {
  return (
    <Container>
      <CreateCard info={cards} />
    </Container>
  );
}

export default CardsPage;
