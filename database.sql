CREATE DATABASE patients;

CREATE TABLE peopleList(
    person_id SERIAL PRIMARY KEY,
    fio VARCHAR (50),
    gender VARCHAR (20),
    birthday DATE,
    locat VARCHAR,
    numOms VARCHAR(16)
);