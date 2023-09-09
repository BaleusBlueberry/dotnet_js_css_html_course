import { useContext, useEffect, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { loginUser } from "../OnlineServices/api";
import { ThemeContext } from "../ResourcesProject/contexts/ThemeProvider";
import { UserContext } from "../ResourcesProject/contexts/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [registerData, setRegisterData] = useState({
    Email: "",
    Password: "",
  });
  const [error, seterror] = useState(null);
  const { theme } = useContext(ThemeContext);
  const { setToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(
        registerData.Email,
        registerData.Password
      );
      setToken(response.token);
      navigate("/");
    } catch (error) {
      seterror("Incorrect Login, please try again");
    }
  };

  function callCreateComponent(name, label, type = "text", req = "true") {
    return (
      <CreateComp
        name={name}
        label={label}
        value={registerData[name]}
        type={type}
        req={req}
        onChange={(value) =>
          setRegisterData({ ...registerData, [name]: value })
        }
      />
    );
  }

  return (
    <div className={`container-fluid bg-${theme}`}>
      <Container className={`justify-content-center mt-5 mb-6`}>
        {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <h1
            className={`text-center text-${
              theme === "dark" ? "light" : "dark"
            }`}
          >
            Login Page
          </h1>

          {callCreateComponent("Email", "Email", "email")}
          {callCreateComponent("Password", "Password", "password", "")}
          <div className="text-center">
            <Button variant="success" type="submit">
              Log in
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default LoginPage;
