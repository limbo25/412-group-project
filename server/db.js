const Pool = require("pg").Pool

const pool = new Pool({
    user:"limbo", 
    host: "localhost", 
    port: 5432, 
    database: "limbo"
}); 

module.exports = pool; 