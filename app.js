// list of users for login.
let users = [
  { name: "him", password: "00000" },
  { name: "ronan", password: "11111" },
  { name: "rady", password: "22222" },
  { name: "edouar", password: "33333" },
];

// TODO: Create a server.
const express = require("express");
const app = express();
const PORT = 3000;

// login request path
app.listen(PORT, () => {
  console.log("server started");
});

app.get("/login", (req, res) => {
  //TODO: 
  res.send(users)
});

// connect to client and give the data
app.use(express.static("front_end"));
