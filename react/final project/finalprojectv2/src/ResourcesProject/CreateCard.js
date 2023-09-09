import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreateCard(props) {
  console.log(props);
  console.log(props.info.CardID);
  return (
    <div className="d-flex justify-content-around pb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.info.Picture}
          alt={props.info.PictureDescription}
        />
        <Card.Body>
          <Card.Title>{props.info.Title}</Card.Title>
          <Card.Text>{props.info.Descreption}</Card.Text>
          <Row>
            <Col>
              <Button variant="primary">Go somewhere</Button>
            </Col>
            <Col>
              <Button variant="primary">Go somewhere</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateCard;
