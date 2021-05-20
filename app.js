

// TODO: Create a server.
const express = require("express");
const app = express();
const PORT = 3000;

const {writeFileSync , readFileSync} = require("fs");

app.use(express.json());
app.use(express.urlencoded());

// login request path
app.listen(PORT, () => {
  console.log("server started");
});
let userNames = [];
app.post("/login", (req, res) =>{
  let name = req.body;
  userNames.push(name)
  writeFileSync("users.json" , JSON.stringify(userNames));
  res.send(userNames);
})

app.get("/login", (req, res) => {
  //TODO: 
  let user = JSON.parse(readFileSync("users.json").toString());
  res.send(user)
});

// connect to client and give the data
app.use(express.static("front_end"));
