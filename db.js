const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "1",
    host: "localhost",
    post: 5432,
    database: "patients"
});

module.exports = pool;
