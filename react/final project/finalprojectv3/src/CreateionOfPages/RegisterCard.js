import React, { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { ThemeContext } from "../contexts/ThemeProvider";
import CardDtoBuilder from "../ResourcesProject/CardDtoBuilder";
import { RegisterCardApi } from "../OnlineServices/apiCards";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function RegisterCard() {
  const { theme } = useContext(ThemeContext);
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

  const [showAlert, setShowAlert] = useState(null);
  // what massage will be displayed in the alert
  const [alertMassage, setAlertMassage] = useState(null);
  // what type of alert will be displayed (green or red)
  const [alertType, setAlertType] = useState(null);

  const navigate = useNavigate();

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
    const DtoCard = CardDtoBuilder(submitCard);

    const response = await RegisterCardApi(DtoCard);

    if (!response.success) {
      setAlertMassage(response.message);
      setAlertType("danger");
      setShowAlert(true);
    } else if (response.success) {
      // on sucsesful creation, display success alert wait 2 seconds and navigate to the main page
      setAlertMassage("Created Card sucessfully");
      setAlertType("success");
      setShowAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  return (
    <Container>
      {showAlert ? (
        <Alert key={alertType} variant={alertType}>
          {alertMassage}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit}>
        <h1
          className={`text-center text-${theme === "dark" ? "light" : "dark"}`}
        >
          {"Card Creation Page"}
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
