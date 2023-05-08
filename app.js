const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HI IAM IN LIVE");
});

app.listen(3000, () => {
  console.log("server at 3000");
});
