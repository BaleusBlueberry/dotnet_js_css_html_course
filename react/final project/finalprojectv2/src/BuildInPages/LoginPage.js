import { useContext, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { loginUser } from "../OnlineServices/api";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import { UserContext } from "../contexts/UserContext";

function LoginPage() {
  const [registerData, setRegisterData] = useState({
    Email: "",
    Password: "",
  });
  const [showAlert, setShowAlert] = useState(null);
  const [alertMassage, setAlertMassage] = useState(null);
  const [alertType, setAlertType] = useState(null);

  const { theme } = useContext(ThemeContext);
  const { setToken, readbleToken } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(
        registerData.Email,
        registerData.Password
      );
      setToken(response.token);
      setAlertMassage("Logged in successfully");
      setAlertType("success");
      setShowAlert(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setAlertMassage("Wrong email or password");
      setAlertType("danger");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(null);
      }, 4000);
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
        {showAlert ? (
          <Alert key={alertType} variant={alertType}>
            {alertMassage}
          </Alert>
        ) : null}
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
            <Button variant="success" type="submit" size="lg">
              Log in
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default LoginPage;
