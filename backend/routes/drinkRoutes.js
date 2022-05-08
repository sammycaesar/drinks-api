// Intialise express and router
const express = require("express");
const recordRoutes = express.Router();
// Connect to database
const dbo = require("../config/db");

// GET - create /drinks route to get all drinks
recordRoutes.route("/drinks").get(async function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("drinks")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

module.exports = recordRoutes;
