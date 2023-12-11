//Imports the mysql library
const mysql = require('mysql');

// Imports the dotenv module and calls its config method
require('dotenv/config'); //dotenv is used to load environment variables from a .env

//Using pool instead of connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
   
});

//Exports the created connection pool, making it available for use in other parts of your application
module.exports = pool;