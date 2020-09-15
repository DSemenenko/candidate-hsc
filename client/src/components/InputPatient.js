import React, { Fragment, useState } from "react";
import {useForm} from 'react-hook-form';

// import e from "express";

const InpuptPatient = () => {
    const [fio, setFio] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setbirthday] = useState("");
    const [locat, setlocat] = useState("");
    const [numOms, setnumOms] = useState("");

    //validation 
    const { register, handleSubmit, errors } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    const onSubmit = async (data) => { //e
        // e.preventDefault();
        try {
            const body = { fio, gender, birthday, locat, numOms };
            const response = await fetch("http://localhost:5000/patients", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            

            window.location= "/addpatient";
            console.log(response);
        } catch (err) {
            console.error(err.message)
        }
    }

    return ( 
        <Fragment>
            <h1 className="text-center mt-5">Add patient</h1>
            <form className="mt-5 add-form" onSubmit={handleSubmit(onSubmit)}> 
                <div className="add-info">
                <h2>Full name</h2>    
                    <input 
                        type="text"
                        className="form-control" 
                        value={fio} 
                        onChange={e => setFio(e.target.value)}
                        name="fio"
                        ref={register({ required: true, minLength: 2 })}
                    />
                    {/* commit for required */}
                    {errors.fio && (
                        <p className="text-valid">This is required </p>
                    )}

                </div>    
                <div className="add-info">    
                <h2>Gender</h2>                    
                    <select className="form-control" value={gender} onChange={e => setGender(e.target.value)} name="gender" ref={register({ required: true })}>
                        <option value="">Select</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                    {errors.gender && (
                        <p className="text-valid">This is required </p>
                    )}
                </div>
                <div className="add-info">     
                <h2>Birthday</h2>
                    <input 
                        type="date"
                        className="form-control" 
                        value={birthday} 
                        onChange={e => setbirthday(e.target.value)}
                        name="birthday"
                        ref={register({ required: true })}
                    />
                    {errors.birthday && (
                        <p className="text-valid">This is required </p>
                    )}
                </div>
                <div className="add-info">     
                <h2>Address</h2>
                    <input 
                        type="text"
                        className="form-control" 
                        value={locat} 
                        onChange={e => setlocat(e.target.value)}
                        name="locat"
                        ref={register({ required: true })}
                    />
                    {errors.locat && (
                        <p className="text-valid">This is required </p>
                    )}
                </div>
                <div className="add-info">     
                <h2>OMS</h2>
                    <input 
                        type="text"
                        className="form-control" 
                        value={numOms} 
                        onChange={e => setnumOms(e.target.value)}
                        name="oms"
                        ref={register({ required: true, minLength: 16 })}
                    />
                    {errors.oms && (
                        <p className="text-valid">This is required </p>
                    )}
                </div>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InpuptPatient;
