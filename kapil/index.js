const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

var array = [];

app.use(bodyParser.urlencoded((extended = false)));
const file = path.join(__dirname, "public", "index.html");

app.listen(port, () => {
  console.log("listening to port:" + port);
});

app.get("/:sender", (req, res) => {
  res.sendFile(file);
  console.log(req.params.sender);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.sendfile(file);
  array.push(req.body);
  console.log(array);
});
