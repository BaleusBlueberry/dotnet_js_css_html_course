// import Dropdown from "react-bootstrap/Dropdown";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CreateComp(props) {
  /// takes name, label , value onchange and *type
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
        />
      </FloatingLabel>
    </>
  );
}

export default CreateComp;
