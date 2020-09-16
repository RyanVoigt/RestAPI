var express = require( "express"); // importing the module
import data from "../data";
import * as utilities from "./utils/function"

const app = express(); // creating an Express app

const { port = 3000 } = process.env;



// set up route for '/', http://expressjs.com/en/5x/api.html#res.send

// this will show up on `localhost:3000` in the browser

var bodyParser = require( "body-parser");
var cors = require( "cors");

app.use(bodyParser.json()).use(cors());

app.get("/", (request, response) => response.send("Hello World!"));
app.get("/api/v1/doctors", (req, res) => res.json(data.doctors));
// app.get("/api/v1/doctors/:id", (req, res) => {
//   console.log(req.params);
// });
app.get("/api/v1/doctors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const doctor = data.doctors.find((doc) => doc.id === id);
  return res.json(doctor);
});

// server will start listening for requests, the function is called immediately once the server is ready. Console.logs show up in your terminal.

app.listen(port, () =>
  console.log(`Hello World, I'm listening on port ${port}!`)
);
