const express = require("express");
const connection = require("./db");
const userRouter = require("./Routes/userRoutes");
const auth = require("./middleware/authMiddleware");
const DoctorRouter = require("./Routes/DoctorRoutes");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
// app.use(auth);
app.use("/doctor", DoctorRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
});
