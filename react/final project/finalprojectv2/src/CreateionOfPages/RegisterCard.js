import { UserContext } from "../contexts/UserContext";
import React, { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { projectId } from "../OnlineServices/consts";
import { createNewCard } from "../OnlineServices/api";

function RegisterCard() {
  const { readbleToken, token } = useContext(UserContext);
  const [submitCard, setSubmitCard] = useState({
    CardID: Math.floor(Math.random() * 100000000000),
    OwnerID: null,
    Title: "",
    Descreption: "",
    Location: "",
    Picture: "",
    PictureDescription: "",
    Website: "",
    Facebook: "",
    PhoneNumber: "",
  });

  useEffect(() => {
    setSubmitCard({ ...submitCard, OwnerID: readbleToken.ID });
  }, [readbleToken]);

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
        {callCreateComponent("CardCategory", "Card Category")}
        {callCreateComponent("Title", "Card Title")}
        {callCreateComponent("Descreption", "Card Descreption")}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegisterCard;
