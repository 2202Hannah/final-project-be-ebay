const express = require("express");
const app = express();

const { getEbayItems } = require("./controllers/ebay.controller");
const {
  getUsers,
  getUserByUsername
} = require(`./controllers/users.controller`);
const { getAllEndPoints } = require("./controllers/contents.controller");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/api", getAllEndPoints);
app.get("/api/ebayCall", getEbayItems);
app.get(`/api/users`, getUsers);
app.get(`/api/users/:username`, getUserByUsername);

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

app.use((err, request, response, next) => {
  response.status(500).send({ msg: "Something went wrong!" });
});

module.exports = app;
