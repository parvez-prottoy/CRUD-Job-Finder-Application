require("dotenv").config("../.env");

const dev = {
  port: process.env.PORT || 8080,
  dbURL:
    process.env.MONGO_URL || "mongodb://localhost:27017/JobFinderApplication",
};
module.exports = dev;
