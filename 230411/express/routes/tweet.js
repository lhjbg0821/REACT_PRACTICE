const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("특정 트윗 조회");
});

router.post("/create", (req, res) => {
  res.send("게시물 생성");
});

router.put("/update", (req, res) => {
  res.send("게시물 수정");
});

router.delete("/delete", (req, res) => {
  res.send("게시물 삭제");
});
module.exports = router;
