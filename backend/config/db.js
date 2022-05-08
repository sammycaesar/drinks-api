// Create the connection to MongoDb Atlas
const { MongoClient } = require("mongodb");

// Grab the connection from Mongo Compass
const connectionString = process.env.MONGO_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  //Connect to database
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      //Connect to the drinksapp database
      dbConnection = db.db("drinksapp");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
