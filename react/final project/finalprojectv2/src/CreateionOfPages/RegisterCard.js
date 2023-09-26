import { UserContext } from "../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";
import { createNewCard, getUserData, updateItem } from "../OnlineServices/api";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useParams } from "react-router-dom";

function RegisterCard() {
  const { readbleToken, token, cards, setReloadCards } =
    useContext(UserContext);
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
    if (id) {
      let singleItem = cards.find((card) => card.ItemID === id);
      if (singleItem) {
        singleItem = singleItem.Data;
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
  }, [readbleToken, cards]);

  useEffect(() => {
    if (id) {
      const singleItem = cards.filter((card) => card.ItemID === id);
      const singleItemData = singleItem;
    }
  }, []);

  function callCreateComponent(
    name,
    label,
    type = "text",
    required = "required"
  ) {
    return (
      <CreateComp
        name={name}
        label={label}
        value={submitCard[name]}
        type={type}
        required={required}
        onChange={(value) => setSubmitCard({ ...submitCard, [name]: value })}
      />
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(submitCard);
    if (id) {
      console.log("updatedcards");
      await updateItem(token, "Cards", id, submitCard)
        .then(() => {
          console.log("updatedcards successfully");
        })
        .catch(() => {
          console.log("it didn't work top update");
        });
    } else {
      console.log("set new cards");
      await createNewCard(token, submitCard)
        .then(() => {
          console.log("it worked! created a new item");
        })
        .catch(() => {
          console.log("it didnt work");
        });
    }
    setReloadCards("");
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
          <Col>{callCreateComponent("Title", "Card Title", "text", "no")}</Col>
          <Col>
            {callCreateComponent(
              "Descreption",
              "Card Descreption",
              "text",
              "no"
            )}
          </Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("Country", "Country", "text", "no")}</Col>
          <Col>{callCreateComponent("City", "City", "text", "no")}</Col>
          <Col>{callCreateComponent("State", "State", "text", "no")}</Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("Street", "Street", "text", "no")}</Col>
          <Col>
            {callCreateComponent("HouseNumber", "House Number", "text", "no")}
          </Col>
          <Col>
            {callCreateComponent("ZipCode", "ZipCode", "number", "text", "no")}
          </Col>
        </Row>

        {callCreateComponent("Picture", "Picture Link")}
        {callCreateComponent("PictureDescription", "Picture Description")}
        {callCreateComponent("PhoneNumber", "PhoneNumber", "text", "no")}
        {callCreateComponent("Website", "Website Link", "text", "no")}
        {callCreateComponent("Facebook", "Facebook Link", "text", "no")}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegisterCard;
