const express = require("express");

const router = express.Router();

//:id => dynamic route
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

module.exports = router;
