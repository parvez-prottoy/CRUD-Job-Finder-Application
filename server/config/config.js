require("dotenv").config("../.env");

const dev = {
  port: process.env.PORT || 8080,
};
module.exports = dev;
