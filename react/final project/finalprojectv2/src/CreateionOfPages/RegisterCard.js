import React, { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useParams } from "react-router-dom";
import CardDtoBuilder from "../ResourcesProject/CardDtoBuilder";

function RegisterCard() {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const [editMod, setEditMod] = useState(id ? true : false);

  const [submitCard, setSubmitCard] = useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

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
    const DtoCard = CardDtoBuilder(submitCard);
    console.log(DtoCard);

    if (id) {
      console.log("updatedcards");
      // await updateItem(token, "Cards", id, submitCard)
      //   .then(() => {
      //     console.log("updatedcards successfully");
      //   })
      //   .catch(() => {
      //     console.log("it didn't work top update");
      //   });
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
          <Col>{callCreateComponent("title", "Card Title", "text", "no")}</Col>
          <Col>
            {callCreateComponent("subtitle", "Card Subtitle", "text", "no")}
          </Col>
          <Col>
            {callCreateComponent(
              "description",
              "Card description",
              "text",
              "no"
            )}
          </Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("country", "Country", "text", "no")}</Col>
          <Col>{callCreateComponent("city", "City", "text", "no")}</Col>
          <Col>{callCreateComponent("state", "State", "text", "no")}</Col>
        </Row>
        <Row>
          <Col>{callCreateComponent("street", "Street", "text", "no")}</Col>
          <Col>
            {callCreateComponent("houseNumber", "House Number", "text", "no")}
          </Col>
          <Col>
            {callCreateComponent("zip", "ZipCode", "number", "text", "no")}
          </Col>
        </Row>

        {callCreateComponent("url", "Picture Link")}
        {callCreateComponent("alt", "Picture Description")}
        {callCreateComponent("phone", "PhoneNumber", "text", "no")}
        {callCreateComponent("web", "Website Link", "text", "no")}
        {callCreateComponent("email", "Email Link", "text", "no")}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegisterCard;
