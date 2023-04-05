import Card from "react-bootstrap/Card";

function PatientItem(props) {
  return (
    <li style={{paddingTop: '25px'}}>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.rollno}
          </Card.Subtitle>
          <Card.Text>DOB : {props.dob}</Card.Text>
          <Card.Text>Contact :</Card.Text>
          <Card.Text>{props.contact}</Card.Text>
          <Card.Text>{props.address}</Card.Text>
          <Card.Text>Medical Details:</Card.Text>
          <Card.Text>{props.details}</Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
}

export default PatientItem;
