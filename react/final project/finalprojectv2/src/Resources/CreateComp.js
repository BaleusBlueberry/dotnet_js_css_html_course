// import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CreateComp(props) {
  /// takes name, label , value onchange and *type
  const validation = new Map([
    ["FirstName", "^[A-Za-z]{1,}$"],
    ["LastName", "^[A-Za-z]{1,}$"],
    ["Email", ".+"],
    [
      "Password",
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]{4})(?=.*[!@%$#^&*-_*])[A-Za-z0-9!@%$#^&*-_*]{8,}$",
    ],
    ["CompanyName", "^[A-Za-z]{1,}$"],
    ["Phone", "[0-9]{6,}"],
    ["Country", "[A-Za-z]{1,}"],
    ["City", "[A-Za-z]{1,}"],
    ["HouseNumber", ".+"],
    ["State", ".+"],
    ["ZipCode", "[0-9]{1,}"],
  ]);
  return (
    <>
      <FloatingLabel
        controlId={props.name}
        label={props.label}
        className="mb-3"
      >
        <Form.Control
          required
          type={props.type}
          placeholder={props.label}
          name={props.name}
          value={props.value}
          onChange={(e) => props.onChange(e.currentTarget.value)}
          pattern={validation.get(props.name)}
        />
      </FloatingLabel>
    </>
  );
}

export default CreateComp;
