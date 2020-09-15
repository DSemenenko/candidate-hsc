const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

console.log(__dirname);

//ROUTES
app.use(express.static(path.join(__dirname, '/client/build')));
 
app.get("/", (req, res) => {
    res.send(express.static(path.join(__dirname, '/client/build', 'index.html')));
});



// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

//create a patient
app.post("/patients", async (req, res) => {
    try {
        // console.log(req.body)
        const { fio, gender, birthday, locat, numOms } = req.body;

        const newPatient = await pool.query("INSERT INTO peopleList (fio, gender, birthday, locat, numOms) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [fio, gender, birthday, locat, numOms]
        );
        
        res.json(newPatient)
    } catch (err) {
        console.error(err.message);
    }
});

//get all patients
app.get("/patients", async (req, res) => {
    try {
        const allPatients = await pool.query("SELECT * FROM peopleList");
        res.json(allPatients.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a patient
app.get("/patients/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const patient = await pool.query("SELECT * FROM peopleList WHERE person_id = $1", [id])

        res.json(patient.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a patient
app.put("/patients/:id", async (req, res) => {
    try {
            const {id} = req.params;
            const {fio} = req.body;
            const {gender} = req.body;
            const {birthday} = req.body;
            const {locat} = req.body;
            const {numoms} = req.body;
            const upDatePatient = await pool.query(
                "UPDATE peopleList SET fio = $2, gender = $3, birthday = $4, locat = $5, numOms = $6 WHERE person_id = $1",  
            [id, fio, gender, birthday, locat, numoms, ]
        );

        res.json("Patient was updated")
    } catch (err) {
        console.error(err.message)
    }
});

//delete a pitient
app.delete("/patients/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletePetient = await pool.query("DELETE FROM peoplelist WHERE person_id = $1", [
            id
        ]);

        res.json("Patient was deleted");
    } catch (err) {
        console.log(err.message);
    }
});


//search
app.get("/users", async (req, res) => {
    try {
        const { name } = req.query;

        //first_name last_name => %{}%
        //"Hanry Lu" => %anry %
        // || => OR SQL || => Concat

        const patients = await pool.query("SELECT * FROM peoplelist WHERE fio LIKE $1 OR locat LIKE $1", [`%${name}%`]);

        res.json(patients.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:5000`)
});