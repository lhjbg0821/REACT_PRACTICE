const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);
  res.json(todoData);
});

router.post("/", (req, res) => {
  const { title, desc } = req.body;

  todoData.push({ title, desc });

  console.log(title, desc);

  res.send("임시로 투두 생성.");
});

module.exports = router;
