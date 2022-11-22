const express = require("express");
const app = express();
const { getEbayItems } = require("./controllers/ebay.controller");
const {
  getUsers,
  getUserByUsername
} = require(`./controllers/users.controller`);
const { removeRecipient } = require("./controllers/recipients.controller");

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.get("/api/ebayCall", getEbayItems);

app.get(`/api/users`, getUsers);
app.get(`/api/users/:username`, getUserByUsername);

//app.get(`/api/users/:username/recipients`, getRecipientsByUsername);
//app.post(`/api/users/:username/recipients`, postRecipientByUsername);
app.delete(`/api/recipients/:recipient_id`, removeRecipient);

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
