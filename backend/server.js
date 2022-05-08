// Loads the configuration from config.env to process.env
require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");

// get MongoDB driver connection
const dbo = require("../backend/config/db");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(require("../backend/routes/drinkRoutes"));

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
