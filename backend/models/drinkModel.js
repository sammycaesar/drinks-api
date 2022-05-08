/* Currently not in use, to be included in the next update. This part will be a schema that will be linked to the Server so everything is more tidy & organised better */

const { ServerApiVersion } = require("mongodb/lib");
const { OP_UPDATE } = require("mongodb/lib/cmap/wire_protocol/constants");
const mongoose = require("mongoose");
const { use } = require("../routes/drinkRoutes");

const drinkSchema = mongoose.Schema({
  name: String,
  difficulty: String,
  description: String,
  ingredients: Array,
  instructions: Array,
  images: String,
  tags: Array,
});

module.exports = mongoose.modelNames("Drink", drinkSchema);
