const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../Model/UserModel");
const jwt = require("jsonwebtoken");

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await UserModel.create({ email, password: hashedPassword });
    user.save();
    res.send("user created");
  } catch (error) {
    res.send(error);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(401).send("Invalid email or password");
      return;
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).send("Invalid email or password");
      return;
    }
    const token = jwt.sign({ id: user._id }, "secret");
    console.log(token);
    res.send(token);
  } catch (error) {
    res.send(error);
  }
});

module.exports = userRouter;
