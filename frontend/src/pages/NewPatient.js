import NewPatientForm from "../components/Patients/NewPatientForm";
import axios from "axios";

function NewPatientPage() {
  function addPatientHandler(PatientData) {
    console.log("inside handleGetJson");
    const obj = {
      rollno: PatientData.rollno,
      name: PatientData.name,
      dob: PatientData.dob,
      contact: PatientData.contact,
      address: PatientData.address,
      details: PatientData.details,
    };
    axios
      .post("http://localhost:9000/add_data.php", obj)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <section>
      <h1>Add New Patient</h1>
      <NewPatientForm onAddPatient={addPatientHandler} />
    </section>
  );
}

export default NewPatientPage;
