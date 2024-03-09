import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import CreateComp from "../ResourcesProject/CreateComp";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { UpdateUser, registerUser } from "../OnlineServices/apiUsers";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import BuildRegisterRequestPayload from "../ResourcesProject/RegisterBuilder";

function EditUser() {
  // store the register data
  const restRegister = {
    first: "",
    middle: "",
    last: "",
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));

    // Update state with user data if available
    if (userData) {
      setUser(userData);
      setRegisterData({
        ...restRegister,
        first: userData.name.first,
        last: userData.name.last,
        companyName: userData.companyName || "",
        phone: userData.phone || "",
        country: userData.address.country || "",
        city: userData.address.city || "",
        houseNumber: userData.address.houseNumber || "",
        street: userData.address.street || "",
        state: userData.address.state || "",
        zip: userData.address.zip || "",
        url: userData.image.url || "",
        alt: userData.image.alt || "",
      });
    }
  }, []);

  // navigation function
  const navigate = useNavigate();

  // controlls the dark / light theme of the page
  const { theme } = useContext(ThemeContext);

  // controlls what happands when use clicks register
  const handleSubmit = async (e) => {
    e.preventDefault();

    // transforms the data into the correct object type
    const payload = BuildRegisterRequestPayload(registerData);

    // posts to the register function that posts to the api with the current registerd data
    const response = await UpdateUser(user._id, payload);

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
          EditUser Page
        </h1>
        <Row>
          <Col>{callCreateComponent("first", "First Name")}</Col>
          <Col>{callCreateComponent("last", "Last Name")}</Col>
        </Row>
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
        <Button variant="success" type="submit" size="lg" className="mb-5 mb-6">
          Update
        </Button>
      </form>
    </Container>
  );
}

export default EditUser;
