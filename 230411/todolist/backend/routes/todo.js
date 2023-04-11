const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

// 전체 todoList
router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.json({ error: "존재하지 않는 ID입니다." });
  }
  res.json(todoData[parseInt(id)]);
});

// todo 생성
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  todoData.push({ title, desc, isDone: false });

  console.log(todoData);

  res.json(todoData);
});

// 특정 todoList 수정
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID 입니다." });
  }

  // 둘다 입력 안했을 때 > client error 처리
  if (!title && !desc) {
    res
      .status(400)
      .json({ error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다." });
  }

  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

// 완료 여부
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

// todoList 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  todoData = todoData.filter((v, i) => {
    return parseInt(id) !== i;
  });

  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
