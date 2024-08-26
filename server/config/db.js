const mongoose = require("mongoose");
const dbURL = require("./config").dbURL;
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(colors.black.bgMagenta("MongoDB is connected."));
  } catch (error) {
    console.log(colors.black.bgRed("MongoDB is not connected."));
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
