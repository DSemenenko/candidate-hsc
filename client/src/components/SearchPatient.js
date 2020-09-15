import React, { Fragment, useState } from "react";

import EditPatient from "./EditPatient";
const SearchPatient = () => {

    const [name, setName] = useState("");
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

    //search
    const onSubmitForm = async e => {
        e.preventDefault()
        try { 
            const response = await fetch(`http://localhost:5000/users/?name=${name}`);

            const parseResponse = await response.json();

            setPatients(parseResponse);
        } catch (err) { 
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <div className="container">
                <h1 className="my-5">Search</h1>
                <form className="d-flex" onSubmit={onSubmitForm}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Search"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <button className="btn btn-success">Submit</button>
                </form>
                <table className="table my-5">
                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>Gender</th>
                            <th>Birthday</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patients => (
                            <tr>
                                <td>{patients.fio}</td>
                                <td>{patients.gender}</td>
                                <td>{patients.birthday}</td>
                                <td>{patients.locat}</td>
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
                {patients.length === 0 && <p>No result Found</p>}
            </div>
        </Fragment>
    );
};

export default SearchPatient;