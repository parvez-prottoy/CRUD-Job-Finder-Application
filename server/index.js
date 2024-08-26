const app = require("./app");
const colors = require("colors");

const PORT = require("./config/config").port;
app.listen(PORT, () => {
  console.log(
    colors.bgGreen.black(`Server is running on http://localhost:${PORT}`)
  );
});
