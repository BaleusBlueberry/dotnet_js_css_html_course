import React, { useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { projectId } from "../OnlineServices/consts";

function RegisterCard() {
  const [submitCard, setSubmitCard] = useState({
    CardID: "",
    Title: "",
    Descreption: "",
    Location: "",
    Picture: "",
    PictureDescription: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const bearerToken = localStorage.getItem("USER_TOKEN");

    const config = { headers: { Authorization: `Bearer ${bearerToken}` } };
    console.log("submitted");

    const postData = {
      Data: { ...submitCard },
      Scope: "Public",
    };

    console.log(config);

    axios
      .post(
        `https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/item/${projectId}_${submitCard.CardCategory}`,
        postData, // For adding, we send only Data and Scope
        config
      )
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {callCreateComponent("CardCategory", "Card Category")}
        {callCreateComponent("Title", "Card Title")}
        {callCreateComponent("descreption", "Card Descreption")}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default RegisterCard;
