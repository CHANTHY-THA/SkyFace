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

// MESSAGE DATA
let messages = [];
let users = [];

// ------------Send message to user--------------------------------
app.get("/message", (req, res) => {
  messages = JSON.parse(fs.readFileSync(MESSAGE_lIST).toString());
  res.send(messages);
});

// ------------Get message and store in file---------------------------
app.post("/message", (req, res) =>{
  let name = req.body;
  messages.push(name);
  fs.writeFileSync(MESSAGE_lIST, JSON.stringify(messages));
  res.send(messages);
});

// --------------------Send userName------------------------------------
app.get("/user", (req, res) => {
  users = JSON.parse(fs.readFileSync(USERS).toString());
  res.send(users);
});

// ------------------Get userName and store-----------------------------------------------------
app.post("/user", (req, res) =>{
  let name = req.body;
  users.push(name);
  fs.writeFileSync(USERS, JSON.stringify(users));
  res.send(users);
});

app.put("/edit", (req, res) => {
  let text = req.body;
  console.log(text);
})





















app.put("/userId", (req, res) =>{
  let index = parseInt(req.body.id);
  let message = req.body.message;
  
  messages[index].text = message;
  console.log(messages)
  
  fs.writeFileSync(MESSAGE_lIST,JSON.stringify(messages));
  res.send(messages)

});

app.delete("/userDelete/:index", (req, res) =>{
  let position = req.params.index;
  let change = parseInt(position);
  
  messages.splice(change,1);
  fs.writeFileSync(MESSAGE_lIST,JSON.stringify(messages));
  res.send(messages)
});

// Read the file to set the mesage variables
messages = JSON.parse(fs.readFileSync(MESSAGE_lIST).toString());
users = JSON.parse(fs.readFileSync(USERS).toString());