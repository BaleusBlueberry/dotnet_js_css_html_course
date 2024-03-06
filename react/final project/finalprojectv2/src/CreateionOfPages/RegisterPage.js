import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import CreateComp from "../ResourcesProject/CreateComp";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { registerUser } from "../OnlineServices/apiUsers";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import BuildRegisterRequestPayload from "../ResourcesProject/RegisterBuilder";

function RegisterPage() {
  // store the register data
  const restRegister = {
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    isBusines: false,
    companyName: "",
    phone: "",
    country: "",
    city: "",
    houseNumber: "",
    street: "",
    state: "",
    zip: "",
    url: "",
    alt: "",
  };
  // makes register data change each time the user changes a field
  const [registerData, setRegisterData] = useState(restRegister);

  // show alert function
  const [showAlert, setShowAlert] = useState(null);
  const [alertMassage, setAlertMassage] = useState(null);
  const [alertType, setAlertType] = useState(null);

  // navigation function
  const navigate = useNavigate();

  // controlls the dark / light theme of the page
  const { theme } = useContext(ThemeContext);

  // controlls what happands when use clicks register
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registerData);

    // transforms the data into the correct object type
    const payload = BuildRegisterRequestPayload(registerData);

    // posts to the register function that posts to the api with the current registerd data
    const response = await registerUser(payload);

    // after the response from the api if successful
    if (!response.success) {
      setAlertMassage(response.message);
      setAlertType("danger");
      setShowAlert(true);
    } else if (response.success) {
      // on sucsesful login, display success alert wait 2 seconds and navigate to the main page
      setAlertMassage("Registered Successfully");
      setAlertType("success");
      setShowAlert(true);
      setTimeout(() => {
        //navigate("/");
      }, 2000);
    }
  };

  // a function that compiles the fields in the page
  function callCreateComponent(name, label, type = "text") {
    name = name[0].toLowerCase() + name.slice(1);
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
      <form onSubmit={handleSubmit}>
        {showAlert ? (
          <Alert key={alertType} variant={alertType}>
            {alertMassage}
          </Alert>
        ) : null}
        <h1
          className={`text-center text-${theme === "dark" ? "light" : "dark"}`}
        >
          Register Page
        </h1>
        <Row>
          <Col>{callCreateComponent("first", "First Name")}</Col>
          <Col>{callCreateComponent("last", "Last Name")}</Col>
        </Row>
        {callCreateComponent("email", "Email", "email")}
        {callCreateComponent("password", "Password", "password")}
        <p className={`${theme === "dark" ? "text-secondary" : "text-dark"}`}>
          Password must have: 1 uppercase letter, 1 lowercase letter, 4 or more
          digits, 1 special character (!@%$#^&-_), and be at least 8 characters
          long.
        </p>
        <Dropdown data-bs-theme={theme}>
          <Dropdown.Toggle variant="success" id="isBusnies" className="mb-3">
            {registerData.IsBusines ? "Is a Busines" : "Not a Busines"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, isBusines: false })
              }
            >
              Not a Busines
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                setRegisterData({ ...registerData, isBusines: true })
              }
            >
              Is a Busines
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* if user selected that they are a busness, show this */}
        {registerData.isBusines && (
          <>
            {callCreateComponent("CompanyName", "Company Name")}
            {callCreateComponent("Phone", "Phone Number", "phone")}
            <Row>
              <Col>{callCreateComponent("Country", "Country")}</Col>
              <Col>{callCreateComponent("City", "City")}</Col>
              <Col>{callCreateComponent("State", "State")}</Col>
            </Row>
            <Row>
              <Col>{callCreateComponent("Street", "Street")}</Col>
              <Col>{callCreateComponent("HouseNumber", "House Number")}</Col>
              <Col>{callCreateComponent("Zip", "ZipCode", "number")}</Col>
            </Row>
          </>
        )}
        <Button variant="success" type="submit" size="lg" className="mb-5 mb-6">
          Register
        </Button>
      </form>
    </Container>
  );
}

export default RegisterPage;
