import React, {Fragment, useEffect, useState} from "react";

import EditPatient from "./EditPatient";

const ListPatient =() => {
    const [patients, setPatients] = useState([]);

    // delete patient fun
    
    const deletePatient = async (id) => {
        try {   
            const deletePatient = await fetch(`http://localhost:5000/patients/${id}`, {
                method: "DELETE"
            });

            setPatients(patients.filter(patients => patients.person_id !== id));
            // console.log(deletePatient);
        } catch (err) {
            console.error(err.message);
        }
    }

    // get patients to list
    const getPatients = async () => {
        try {
            
            const response = await fetch("/patients")
            const jsonData = await response.json()
            
            setPatients(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPatients();
    }, []);
    // console.log(patients);
    return <Fragment>
        <h1 className="text-center mt-5">List patient</h1>
        <table className="table mt-3">
            <thead>
            <tr>
                <th scope="col">Full name</th>
                <th scope="col">Gender</th>
                <th scope="col">Birthday</th>
                <th scope="col">Address</th>
                <th scope="col">OMS</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>  */}
            {patients.map(patients => (
                <tr key={patients.person_id}>
                    <td>{patients.fio}</td>
                    <td>{patients.gender}</td>
                    <td>{patients.birthday}</td>
                    <td>{patients.locat}</td>
                    <td>{patients.numoms}</td>
                    <td><EditPatient patients={patients} /></td>
                    <td><button 
                        className="btn btn-danger" 
                        onClick={() => deletePatient(patients.person_id)}
                        >
                        Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
  </Fragment>
};

export default ListPatient;