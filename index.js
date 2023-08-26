const express = require("express");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/user/", userRouter);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
