import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewPatientForm.module.css';

function NewPatientForm(props) {
  const rollnoInputRef = useRef();
  const nameInputRef = useRef();
  const dobInputRef = useRef();
  const contactInputRef = useRef();
  const addressInputRef = useRef();
  const detailsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredRollno = rollnoInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDob = dobInputRef.current.value;
    const enteredContact = contactInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDetails = detailsInputRef.current.value;

    const PatientData = {
      rollno: enteredRollno,
      name: enteredName,
      dob: enteredDob,
      contact: enteredContact,
      address: enteredAddress,
      details: enteredDetails
    };

    props.onAddPatient(PatientData);
    console.log(PatientData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='rollno'>Roll Number</label>
          <input type='text' required id='rollno' ref={rollnoInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='dob'>Date of Birth</label>
          <input type='text' required id='dob' ref={dobInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='contact'>Contact</label>
          <input type='text' required id='contact' ref={contactInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            required
            rows='2'
            ref={addressInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='details'>Patient Details</label>
          <textarea
            id='details'
            required
            rows='5'
            ref={detailsInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Patient</button>
        </div>
      </form>
    </Card>
  );
}

export default NewPatientForm;
