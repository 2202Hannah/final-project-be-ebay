const app = require("./app.js");
require("dotenv").config();

const { PORT = 9090 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
