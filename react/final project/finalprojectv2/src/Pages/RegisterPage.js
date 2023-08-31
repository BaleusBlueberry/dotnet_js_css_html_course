import { useState } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import CreateComp from "../Resources/CreateComp";

function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    id: Math.floor(Math.random() * 10000000000000),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isBusines: false,
  });

  return (
    <Container>
      <FloatingLabel controlId="firstName" label="firstName">
        <Form.Control
          type="text"
          placeholder="Password"
          name="firstName"
          value={registerData.firstName}
          onChange={(e) =>
            setRegisterData({ ...registerData, firstName: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel controlId="lastName" label="lastName">
        <Form.Control
          type="text"
          placeholder="lastName"
          name="lastName"
          value={registerData.lastName}
          onChange={(e) =>
            setRegisterData({ ...registerData, lastName: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
        />
      </FloatingLabel>
      <FloatingLabel controlId="Password" label="Password">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={registerData.password}
          onChange={(e) =>
            setRegisterData({ ...registerData, password: e.target.value })
          }
        />
      </FloatingLabel>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="isBusnies">
          Is it a Business?
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
      <CreateComp name="testname" type="test type" />
    </Container>
  );
}

export default RegisterPage;
