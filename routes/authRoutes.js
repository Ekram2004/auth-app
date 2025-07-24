const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/User");
const router = express.Router();
router.use(express.json());
const authenticate = require('../midlleware/authMiddleware');

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res(400).json({ error: "user already existis" });
    const hashedPasword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPasword });
    await user.save();
    res.status(201).json({ message: "signup successful" });
  } catch (err) {
    console.error("signup error", err);
    res.status(500).json({ error: "signup failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!email) return res.status(401).json({ error: "user not found" });
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      return res.status(401).json({ error: "Invalid creadential" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: "login successful", token });
  } catch (err) {
    console.error("login error", err);
    res.status(500).json({ error: "login failed" });
  }
});
router.get('/protected',authenticate, (req, res) => {
    res.json({
      message: `Hello user , this is a protected route!`,
    });
})
module.exports = router;
