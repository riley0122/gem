const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.listen(80, () => {
  console.log("Listening on port 80");
});
