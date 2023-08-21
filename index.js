const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/html/new.html");
});

app.get("/create/make", (req, res) => {
  if (!req.query.hasOwnProperty("name")) {
    req.sendStatus(400);
    return;
  }
  let path = __dirname + "/projects/" + req.query.name;
  fs.mkdirSync(path);
  fs.writeFileSync(
    path + "/project.json",
    `{\n    "name": \"${req.query.name}\"\n}`
  );
  fs.writeFileSync(
    path + "/app.mjs",
    `import * as gem from '../../gem';\n\n// Your code goes here`
  );
  res.send(
    "created project " + req.query.name + "<br />View it in folder: " + path
  );
});

app.listen(80, () => {
  console.log("Listening on port 80");
});
