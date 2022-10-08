const express = require("express");
const data = require("./dummy");

const api = express();

const HOST = "localhost";
const PORT = 2303;

api.get("/", (req, res) => {
  res.send("Welcome to API!");
});

api.get("/people", (req, res) => {
  res.status(200).json(data);
});

api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
