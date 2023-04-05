import PatientList from "../components/Patients/PatientList";
import { useState, useEffect } from "react";
import axios from "axios";

function AllPatientsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPatients, setLoadedPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/get_data.php")
      .then(response => {
        const data = JSON.parse(response.data.slice(41, -1));
        const updatedPatients = data.map((Patient, index) => {
          return {
            id: index + 1,
            rollno: Patient.rollno,
            name: Patient.name,
            dob: Patient.dob,
            contact: Patient.contact,
            address: Patient.address,
            details: Patient.details,
          };
        });
        setIsLoading(false);
        setLoadedPatients(updatedPatients);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Patients</h1>
      <PatientList Patients={loadedPatients} />
    </section>
  );
}

export default AllPatientsPage;