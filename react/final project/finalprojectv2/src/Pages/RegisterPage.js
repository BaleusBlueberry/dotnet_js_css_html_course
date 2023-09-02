import { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import CreateComp from "../Resources/CreateComp";
import axios from "axios";

const projectId = "31bcacd2-079a-4ec0-b1e3-74aec2cb7423";
const myApiLink =
  "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/login/";

function RegisterPage() {
  const restRegister = {
    Role: "",
    ID: "",
    ProjectID: projectId,
    FirstName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/user/",
        registerData
      )
      .then((response) => {
        setRegisterData(restRegister);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
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
    <Container>
      <form onSubmit={handleSubmit}>
        {callCreateComponent("FirstName", "First Name")}
        {callCreateComponent("LastName", "Last Name")}
        {callCreateComponent("Email", "Email", "email")}
        {callCreateComponent("Password", "Password", "password")}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="IsBusnies" className="mb-3">
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
        {registerData.IsBusines ? (
          <>
            {callCreateComponent("CompanyName", "Company Name")}
            {callCreateComponent("Phone", "Phone Number", "phone")}
            {callCreateComponent("Country", "Country")}
            {callCreateComponent("City", "City")}
            {callCreateComponent("HouseNumber", "House Number")}
            {callCreateComponent("State", "State")}
            {callCreateComponent("ZipCode", "ZipCode")}
          </>
        ) : null}

        <button variant="success" type="submit">
          Register
        </button>
      </form>
    </Container>
  );
}

export default RegisterPage;
