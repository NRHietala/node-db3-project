const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.use(express.json());
server.use("/api/schemes", SchemeRouter);

server.get("/", (_, res) => {
  res.send("Is your API running? You should go catch it! 🏃‍");
});

server.use("*", (_, res) => {
  res.status(404).json({ message: "404: Resource not found" });
});

module.exports = server;
