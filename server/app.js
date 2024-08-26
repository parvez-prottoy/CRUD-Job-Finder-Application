const express = require("express");
const app = new express();
const { notFoundHandler, errorHandler } = require("./src/utils/error");
const baseRoute = require("./src/routes/base.route");
// ? use middleware
const morgan = require("morgan");
const cors = require("cors");
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// ? routes
app.use("/", baseRoute);
// ? error handler
app.use(notFoundHandler);
app.use(errorHandler);
module.exports = app;
