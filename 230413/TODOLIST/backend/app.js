const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const todoRouter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(cors());
// express가 json의 req를 읽을 수 없기 떄문에 12번줄 생성
app.use(express.json());
app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port}🔥`);
});
