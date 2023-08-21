const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/html/new.html");
});

app.get("/create/make", (req, res) => {});

app.listen(80, () => {
  console.log("Listening on port 80");
});
