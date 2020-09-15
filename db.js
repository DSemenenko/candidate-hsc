const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Aki9980386",
    host: "localhost",
    post: 5432,
    database: "patients"
});

module.exports = pool;