 require('dotenv').config();
 const Pool = require("pg");

 module.exports = new Pool({
    host: "localhost",
    user: process.env.POOL_USERNAME,
    database: "pokemon",
    password: process.env.POOL_PASSWORD,
    port: 5432,
 })
