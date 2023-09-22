import { UserContext } from "../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";
import { createNewCard, getUserData } from "../OnlineServices/api";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useParams } from "react-router-dom";

function RegisterCard() {
  const { readbleToken, token, cards } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [editMod, setEditMod] = useState(id ? true : false);

  const [submitCard, setSubmitCard] = useState({
    Ownermail: null,
    Title: "",
    Descreption: "",
    Picture: "",
    PictureDescription: "",
    Website: "",
    Facebook: "",
    PhoneNumber: "",
    Country: "",
    City: "",
    HouseNumber: "",
    Street: "",
    State: "",
    ZipCode: "",
  });

  useEffect(() => {
    setSubmitCard({ ...submitCard, Ownermail: readbleToken?.Email });
    console.log(cards);
    if (id) {
      const singleItem = cards.find((card) => card.ItemID === id);
      if (singleItem) {
        setSubmitCard({
          ...submitCard,
          Title: singleItem.Title || "",
          Descreption: singleItem.Descreption || "",
          Picture: singleItem.Picture || "",
          PictureDescription: singleItem.PictureDescription || "",
          Website: singleItem.Website || "",
          Facebook: singleItem.Facebook || "",
          PhoneNumber: singleItem.PhoneNumber || "",
          Country: singleItem.Country || "",
          City: singleItem.City || "",
          HouseNumber: singleItem.HouseNumber || "",
          Street: singleItem.Street || "",
          State: singleItem.State || "",
          ZipCode: singleItem.ZipCode || "",
        });
      }
    }
  }, [readbleToken]);

  useEffect(() => {
    if (id) {
      const singleItem = cards.filter((card) => card.ItemID === id);
      const singleItemData = singleItem;
    }
  }, []);

  function callCreateComponent(name, label, type = "text") {
    return (
      <CreateComp
        name={name}
        label={label}
        value={submitCard[name]}
        type={type}
        onChange={(value) => setSubmitCard({ ...submitCard, [name]: value })}
      />
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(submitCard);
    await createNewCard(token, submitCard)
      .then(() => {
        console.log("it worked!");
      })
      .catch(() => {
        console.log("it didnt work");
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1
          className={`text-center text-${theme === "dark" ? "light" : "dark"}`}
        >
          {editMod ? "Edit Card Page" : "Card Creation Page"}
        </h1>
        <Row>
          <Col>{callCreateComponent("Title", "Card Title")}</Col>
          <Col>{callCreateComponent("Descreption", "Card Descreption")}</Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("Country", "Country")}</Col>
          <Col>{callCreateComponent("City", "City")}</Col>
          <Col>{callCreateComponent("State", "State")}</Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("Street", "Street")}</Col>
          <Col>{callCreateComponent("HouseNumber", "House Number")}</Col>
          <Col>{callCreateComponent("ZipCode", "ZipCode", "number")}</Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("PhoneNumber", "PhoneNumber")}</Col>
        </Row>
        {callCreateComponent("Picture", "Picture Link")}
        {callCreateComponent("PictureDescription", "Picture Description")}
        {callCreateComponent("Website", "Website Link")}
        {callCreateComponent("Facebook", "Facebook Link")}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegisterCard;
