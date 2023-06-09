const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();

//유저 생성
router.post("/", async (req, res) => {
  try {
    const { account } = req.body;
    // insomnia 에 요청을 보낼때
    // insomnia body 내용!

    const existUser = await client.user.findUnique({
      where: {
        account,
      },
    });
    if (existUser) {
      return res
        .status(400)
        .json({ ok: false, error: "Already exist account." });
    }

    const user = await client.user.create({
      data: {
        account,
      },
    });

    res.json({ ok: true, user });
  } catch (error) {
    console.error(error);
  }
});

//유저 조회
router.get("/:account", async (req, res) => {
  try {
    const { account } = req.params;

    const user = await client.user.findUnique({
      where: {
        account,
      },
    });
    if (!user) {
      return res.status(400).json({
        ok: false,
        error: "Not exist user.",
      });
    }

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
