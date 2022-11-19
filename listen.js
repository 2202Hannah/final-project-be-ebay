const app = require("./app.js");
require("dotenv").config();

const { PORT = 9090 } = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
