// 리액트 기준 import기능 (Common JS)
const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");

const app = express();

const port = 3010;

app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}🚀🚀🚀`);
});
