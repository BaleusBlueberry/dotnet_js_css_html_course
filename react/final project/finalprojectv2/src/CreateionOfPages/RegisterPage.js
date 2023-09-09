import { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import CreateComp from "../ResourcesProject/CreateComp";
import { getUserData, registerNewUser } from "../OnlineServices/api";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function RegisterPage() {
  const restRegister = {
    Role: "admin",
    ID: Math.floor(Math.random() * 100000000000),
    Name: "",
    LastName: "",
    Email: "",
    Password: "",
    IsBusines: false,
    CompanyName: "",
    Phone: "",
    Country: "",
    City: "",
    HouseNumber: "",
    State: "",
    ZipCode: "",
  };
  const [registerData, setRegisterData] = useState(restRegister);
  const [error, seterror] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerNewUser(registerData);
      setRegisterData(restRegister);
      seterror(null);
    } catch (error) {
      seterror("Failed to register. Please try again.");
    }
  };

  function callCreateComponent(name, label, type = "text") {
    return (
      <CreateComp
        name={name}
        label={label}
        value={registerData[name]}
        type={type}
        onChange={(value) =>
          setRegisterData({ ...registerData, [name]: value })
        }
      />
    );
  }
  return (
    <Container className="d-flex justify-content-center mt-5 mb-6">
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>{callCreateComponent("Name", "First Name")}</Col>
          <Col>{callCreateComponent("LastName", "Last Name")}</Col>
        </Row>
        {callCreateComponent("Email", "Email", "email")}
        {callCreateComponent("Password", "Password", "password")}
        <p>
          Password must have: 1 uppercase letter, 1 lowercase letter, 4 or more
          digits, 1 special character (!@%$#^&-_), and be at least 8 characters
          long.
        </p>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="IsBusnies" className="mb-3">
            {registerData.IsBusines ? "Is a Busines" : "Not a Busines"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, IsBusines: false })
              }
            >
              Not a Busines
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, IsBusines: true })
              }
            >
              Is a Busines
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {registerData.IsBusines && (
          <>
            {callCreateComponent("CompanyName", "Company Name")}
            {callCreateComponent("Phone", "Phone Number", "phone")}
            <Row>
              <Col>{callCreateComponent("Country", "Country")}</Col>
              <Col>{callCreateComponent("City", "City")}</Col>
            </Row>
            <Row>
              <Col>{callCreateComponent("HouseNumber", "House Number")}</Col>
              <Col>{callCreateComponent("State", "State")}</Col>
              <Col>{callCreateComponent("ZipCode", "ZipCode", "number")}</Col>
            </Row>
          </>
        )}
        <Button variant="success" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
}

export default RegisterPage;
