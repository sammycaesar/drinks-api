// Sync to Mongoose
const asyncHandler = require("express-async-handler");

// desc:    Get drinks
// route:   GET /api/drinks
// access:  Private
const getDrinks = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("pls add a text field");
  }

  res.status(200).json({ message: "Get drinks" });
});

// desc:    Set drinks
// route:   POST /api/drinks
// access:  Private
const setDrink = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set drinks" });
});

// desc:    Update drinks
// route:   UPDATE /api/drinks
// access:  Private
const updateDrink = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update drink ${req.params.id}` });
});

// desc:    Delete drinks
// route:   DELETE /api/drinks
// access:  Private
const deleteDrink = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete drink ${req.params.id}` });
});

// Export module
module.exports = {
  getDrinks,
  setDrink,
  updateDrink,
  deleteDrink,
};
