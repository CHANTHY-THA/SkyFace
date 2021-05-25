// INPUTS
const express = require("express");
const fs = require("fs");

// CONSTANTS
const MESSAGE_lIST = "message.json";
const USERS = "users.json";
const app = express();
const port = 3000;

// EXPRES CONFIGURATION
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("front_end"));

app.listen(process.env.PORT || port, () => {console.log("App is running...")});

// DATA
let messages = [];
let users = [];

app.get("/message", (req, res) => {
  messages = JSON.parse(fs.readFileSync(MESSAGE_lIST).toString());
  res.send(messages);
});

app.post("/message", (req, res) =>{
  let name = req.body;
  console.log(name);
  messages.push(name);
  fs.writeFileSync(MESSAGE_lIST, JSON.stringify(messages));
  res.send(messages);
});



app.get("/user", (req, res) => {
  messages = JSON.parse(fs.readFileSync(USERS).toString());
  res.send(messages);
});

app.post("/user", (req, res) =>{
  let name = req.body;
  users.push(name);
  fs.writeFileSync(USERS, JSON.stringify(users));
  res.send(users);
});

// Read the file to set the mesage variables
messages = JSON.parse(fs.readFileSync(MESSAGE_lIST).toString());
users = JSON.parse(fs.readFileSync(USERS).toString());
