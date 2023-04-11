const express = require("express");

const router = express.Router();

//:id => dynamic route
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

router.post("/create", (req, res) => {
  res.send("회원가입");
});

router.put("/update", (req, res) => {
  res.send("회원 정보 수정");
});

router.delete("/delete", (req, res) => {
  res.send("회원 정보 삭제");
});

module.exports = router;
