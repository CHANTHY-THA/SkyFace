// INPUTS
const express = require("express");
const fs = require("fs");

// CONSTANTS
const DATA_FILE = "data.json";
const app = express();
const PORT = 3000;

// EXPRES CONFIGURATION
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("front_end"));

app.listen(PORT, () => {console.log("App is running...")});

// DATA
let messages = [];

app.get("/message", (req, res) => {
  messages = JSON.parse(fs.readFileSync(DATA_FILE).toString());
  res.send(messages);
});

app.post("/message", (req, res) =>{
  let name = req.body;
  console.log(name);
  messages.push(name);
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages));
  res.send(messages);
});

// Read the file to set the mesage variables
messages = JSON.parse(fs.readFileSync(DATA_FILE).toString());
