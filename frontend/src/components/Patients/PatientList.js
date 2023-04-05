import PatientItem from './PatientItem';
import classes from './PatientList.module.css';

function PatientList(props) {
  return (
    <ul className={classes.list}>
      {props.Patients.map((Patient) => (
        <PatientItem
          key={Patient.id}
          id={Patient.id}
          rollno={Patient.rollno}
          name={Patient.name}
          dob={Patient.dob}
          contact={Patient.contact}
          address={Patient.address}
          details={Patient.details}
        />
      ))}
    </ul>
  );
}

export default PatientList;
