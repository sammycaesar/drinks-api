//Import and activate package
const express = require("express");
const app = express();

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Listening to the server
app.listen(3000);
