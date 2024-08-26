const home = (_req, res) => {
  res.status(200).send(`<h1>Welcome to the Job Finder Application Server</h1>`);
};
const health = (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "Okay",
  });
};
module.exports = { home, health };
