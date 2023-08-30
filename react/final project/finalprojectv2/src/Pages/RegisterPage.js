import { useState } from "react";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  return (
    <Container>
      <FloatingLabel controlId="email" label="Email address" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
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
    </Container>
  );
}

export default RegisterPage;
