import { useState } from "react";
import CreateComp from "../Resources/CreateComp";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";

const projectId = "31bcacd2-079a-4ec0-b1e3-74aec2cb7423";
const myApiLink =
  "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/login/";

function LoginPage() {
  const [registerData, setRegisterData] = useState({
    Email: "",
    Password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("clicked submitted");
    axios
      .post(myApiLink + projectId, registerData)
      .then((response) => {
        localStorage.setItem("USER_TOKEN", response.config.token);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
      <form>
        {callCreateComponent("Email", "Email", "email")}
        {callCreateComponent("Password", "Password", "password")}
        <div className="text-center">
          <Button variant="success" type="submit" onClick={handleSubmit}>
            Log in
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default LoginPage;
