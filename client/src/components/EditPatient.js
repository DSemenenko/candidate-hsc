import React, {Fragment, useState} from "react";

const EditPatient = ({ patients }) => {
    const [fio, setFio] = useState(patients.fio);
    const [gender, setGender] = useState(patients.gender);
    const [birthday, setBirthday] = useState(patients.birthday);
    const [locat, setLocat] = useState(patients.locat);
    const [numoms, setnumoms] = useState(patients.numoms);

    //edit patient func

    const UpdatePatient = async e => {
      e.preventDefault();
      try {
        const body = {fio, gender, birthday, locat, numoms};

        //proxy

        const response = await fetch(`http://5-63-159-23.ovz.vps.regruhosting.ru:5000/patients/${patients.person_id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      window.location = "/patients";
      } catch (err) {
        console.error(err.message);
      }
    };

    return (
        <Fragment>
        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${patients.person_id}`}>
          Edit
        </button>

        {/* 
          id = id10
         */}
        <div class="modal" id={`id${patients.person_id}`}  onClick={() => setFio(patients.fio)}>
          <div class="modal-dialog">
            <div class="modal-content">
        
              <div class="modal-header">
                <h4 class="modal-title">Edit patient</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <h5>Full name</h5>
                <input type="text" className="form-control" value={fio} onChange={e => setFio(e.target.value)} />
                {/* <input type="text" className="form-control" value={gender} onChange={e => setGender(e.target.value)}/> */}
                <h5>Gender</h5>
                <select className="form-control" value={gender} onChange={e => setGender(e.target.value)}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <h5>Birthday</h5>
                <input type="date" className="form-control" value={birthday} onChange={e => setBirthday(e.target.value)}/>
                <h5>Address</h5>
                <input type="text" className="form-control" value={locat} onChange={e => setLocat(e.target.value)}/>
                <h5>OMS</h5>
                <input type="text" className="form-control" value={numoms} onChange={e => setnumoms(e.target.value)}/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => UpdatePatient(e)}>Edit</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
        
            </div>
          </div>
        </div></Fragment>
    )
}

export default EditPatient;
