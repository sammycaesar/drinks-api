const express = require("express");
const router = express.Router();

// Import controllers
const {
  getDrinks,
  setDrink,
  updateDrink,
  deleteDrink,
} = require("../controllers/drinkController");

router.route("/").get(getDrinks).post(setDrink);
router.route("/:id").delete(deleteDrink).put(updateDrink);

module.exports = router;
