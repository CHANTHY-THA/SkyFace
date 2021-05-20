

// TODO: Create a server.
const express = require("express");
const app = express();
const PORT = 3000;

const {writeFileSync,readFileSync} = require("fs");

app.use(express.json());
app.use(express.urlencoded());

// login request path
app.listen(PORT, () => {
  console.log("server started");
});
let nameList = [
  {name: "chanthy", password: "1111"}
];
app.post("/login", (req, res) =>{
  let name = req.body;
  nameList.push(name);
  writeFileSync("users.json", JSON.stringify(nameList));
  res.send(nameList);
})

app.get("/login", (req, res) => {
  //TODO: 
  let user = JSON.parse(readFileSync("users.json").toString());
  res.send(user)
});

// connect to client and give the data
app.use(express.static("front_end"));
