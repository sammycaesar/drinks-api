// Sync to Mongoose
const asyncHandler = require("express-async-handler");

const Drink = require("../models/goalModel");

// desc:    Get drinks
// route:   GET /api/drinks
// access:  Private
const getDrinks = asyncHandler(async (req, res) => {
  const drinks = await Drink.find();
  res.status(200).json(drinks);
});

// desc:    Set drinks
// route:   POST /api/drinks
// access:  Private
const setDrink = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("pls add a text field");
  }

  const drink = await Drink.create({
    text: req.body.text,
  });
  res.status(200).json({ message: "Set drinks" });
});

// desc:    Update drinks
// route:   UPDATE /api/drinks
// access:  Private
const updateDrink = asyncHandler(async (req, res) => {
  const drink = await Drink.findbyId(req.params.id);

  if (!drink) {
    res.status(400);
    throw new Error("Drink not found");
  }

  const updatedDrink = await Drink.findbyIdandUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedDrink);
});

// desc:    Delete drinks
// route:   DELETE /api/drinks
// access:  Private
const deleteDrink = asyncHandler(async (req, res) => {
  const drink = await Drink.findbyId(req.params.id);

  if (!drink) {
    res.status(400);
    throw new Error("Drink not found");
  }

  await drink.remove();

  res.status(200).json({ id: req.params.id });
});

// Export module
module.exports = {
  getDrinks,
  setDrink,
  updateDrink,
  deleteDrink,
};
