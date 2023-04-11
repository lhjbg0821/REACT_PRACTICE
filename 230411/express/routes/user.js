const express = require("express");

const router = express.Router();

//:id => dynamic route
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

router.put("/:id", (req, res) => {
  res.send("유저 정보 수정");
});

module.exports = router;
