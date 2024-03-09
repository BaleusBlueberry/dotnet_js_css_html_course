import { useContext, useState } from "react";
import CreateComp from "../ResourcesProject/CreateComp";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeProvider";
import { jwtDecode } from "jwt-decode";

import { GetUser, loginUser } from "../OnlineServices/apiUsers";

//main function for login
function LoginPage() {
  //store the user and password data
  const [registerData, setRegisterData] = useState({
    email: "testfox@test.test",
    password: "Foxoblue1234!",
  });

  // show the alert with off/on
  const [showAlert, setShowAlert] = useState(null);
  // what massage will be displayed in the alert
  const [alertMassage, setAlertMassage] = useState(null);
  // what type of alert will be displayed (green or red)
  const [alertType, setAlertType] = useState(null);

  // controlls the theme from usecontext inside themecontext()
  const { theme } = useContext(ThemeContext);

  // anebles the use of navigation to other pages
  const navigate = useNavigate();

  // when clicking login, run the function that logs in the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    // posts the inputed email and password to the loginuserv2 and wait for response
    const response = await loginUser(registerData.email, registerData.password);
    // writes the response to console
    // the input from the api response.success from userservises true/false
    if (!response.success) {
      setAlertMassage(response.message);
      setAlertType("danger");
      setShowAlert(true);
    } else if (response.success) {
      // on sucsesful login, display success alert wait 2 seconds and navigate to the main page
      setAlertMassage("Logged in successfully");
      setAlertType("success");
      setShowAlert(true);

      const decodedToken = jwtDecode(response.token);
      const responceUser = await GetUser(decodedToken._id);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  // compiles the loginpage fillable fiealds
  function callCreateComponent(name, label, type = "text", req = "true") {
    // removes uppercase from first character
    name = name[0].toLowerCase() + name.slice(1);
    return (
      // inputes all the compiled elemets to another elemet that creates the fields
      <CreateComp
        name={name}
        label={label}
        value={registerData[name]}
        type={type}
        req={req}
        // when there is a change, directly change the elemet vlaue and keeping all the other data
        onChange={(value) =>
          setRegisterData({ ...registerData, [name]: value })
        }
      />
    );
  }

  return (
    // css for the login page that changes color acording to the theme
    <div className={`container-fluid bg-${theme}`}>
      <Container className={`justify-content-center mt-5 mb-6`}>
        {showAlert ? (
          // when alert is true, show the alert
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
