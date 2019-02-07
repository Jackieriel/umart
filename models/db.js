const mongoose = require("mongoose");
// request for user model
// require("./user");

// connect to mongodb
mongoose.connect(
  "mongodb://localhost/aksumartdb",
  { useNewUrlParser: true }
);
let db = mongoose.connection;

// Check connection
db.once("open", function() {
  console.log("Conncected to Database");
});

// Check db errors
db.on("error", function(err) {
  console.log(err);
});

require('./adverts')