import React from "react";
import CreateComp from "../Resources/CreateComp";
import Container from "react-bootstrap/Container";

function CreateCard() {
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
      <form>{callCreateComponent("")}</form>
    </Container>
  );
}

export default CreateCard;
