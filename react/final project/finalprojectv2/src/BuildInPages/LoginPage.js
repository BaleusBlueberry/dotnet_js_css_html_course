import { useContext, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { loginUser } from "../OnlineServices/api";
import { ThemeContext } from "../ResourcesProject/contexts/ThemeProvider";

function LoginPage() {
  const [registerData, setRegisterData] = useState({
    Email: "",
    Password: "",
  });
  const [error, seterror] = useState(null);
  const theme = useContext(ThemeContext);

  const textColorClass = theme === "dark" ? "text-light" : "text-dark";
  const bgClass = theme === "dark" ? "bg-dark" : "bg-light";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(
        registerData.Email,
        registerData.Password
      );
      // set a token in useContext
      // navigate to cards page
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
    <Container className={`justify-content-center mt-5 mb-6 ${bgClass}`}>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        {callCreateComponent("Email", "Email", "email")}
        {callCreateComponent("Password", "Password", "password", "")}
        <div className={`text-center ${textColorClass}`}>
          <Button variant="success" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default LoginPage;
