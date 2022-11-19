const app = require("./app.js");
require("dotenv").config();

//const { PORT = 9090 } = process.env;

app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening on ${PORT}...`)
);
