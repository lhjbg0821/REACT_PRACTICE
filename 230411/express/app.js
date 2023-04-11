// 리액트 기준 import기능 (Common JS)
const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/", (req, res) => {
  res.send("Post");
});

app.put("/", (req, res) => {
  res.send("Put");
});

app.delete("/", (req, res) => {
  res.send("Delete");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}🚀`);
});
