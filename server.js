// Importing required modules
import express from "express";

// Creating an Express application
const app = express();

// Define a route that responds with "Hello, World!"
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Setting the port number for the server to listen on
const port = 5000;

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
