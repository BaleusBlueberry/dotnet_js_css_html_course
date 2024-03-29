import CreateCard from "../ResourcesProject/CreateCard";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import { getAllCards } from "../OnlineServices/apiCards";

const UserCards = () => {
  const [cards, setCards] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    async function inner() {
      const response = await getAllCards();

      // gets user id
      const localStorageUserId = JSON.parse(localStorage.getItem("user"))?._id;

      //filter the cards
      const filterdCards = response.message.filter(
        (card) => card.user_id === localStorageUserId
      );

      setCards(filterdCards);
    }
    inner();
  }, []);

  return (
    <>
      <h1 className={`text-center text-${theme === "dark" ? "light" : "dark"}`}>
        {"User cards"}
      </h1>
      {/* show 1 card when small 3 when medium and 5 when large */}
      <Row xs={1} md={3} lg={5} className="g-4">
        {cards.map((card) => (
          <Col key={card._id}>
            <CreateCard card={card} isUserCard={true} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UserCards;
