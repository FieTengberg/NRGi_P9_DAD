// Import necessary modules and packages
const express = require("express");
const pool = require('./config/db.js');
//const https = require("https");
//const cors = require("cors");

// Create an instance of the Express application
const app = express();

// Set port
const PORT = process.env.PORT || 8081;


// Set up CORS options to allow requests from a specific origin
/*
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
*/


// Enable parsing of JSON requests
//app.use(express.json());


// Enable parsing of URL-encoded requests with extended mode
//app.use(express.urlencoded({ extended: true }));


// Acquire a database connection
// Execute a query and fetch data directly when the server runs proving the connection
pool.getConnection ( (err, conn) => {
  if(err) throw err;

  // The query to be executed
  const qry = 'SELECT month FROM billsNRGi WHERE year="2023"';
  
  // Execute the query
  conn.query(qry, (err, result) => {
      conn.release();
      if (err) throw err;
      console.log(result);
  });
});


// An API endpoint
// Define a route for '/api/testData' that retrieves and returns data from the database
app.get('/api/testData', (req, res) => {
  
  // Acquire a database connection
  pool.getConnection((err, conn) => {

    if (err) {
      // Handle connection error
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    
    // SQL query
    const qry = 'SELECT month FROM billsNRGi WHERE year="2023"';
    
    // Execute the query
    conn.query(qry, (err, result) => {
      // Release the database connection afterwards
      conn.release();

      if (err) {
        // Handle query execution error
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      // Send the fetched data as a JSON response
      res.json(result);
    });
  });
});


// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

