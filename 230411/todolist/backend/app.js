const cors = require("cors");
const express = require("express");
const todoRouter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(cors());
// express가 json 형식을 뿌릴수는 있지만 읽어올 수는 없음
//그래서 app.use(express.json())  작업이 필요
app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}🔥🔥🔥`);
});
