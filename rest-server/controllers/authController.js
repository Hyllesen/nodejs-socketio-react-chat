const User = require("../models/User");
const bcrypt = require("bcrypt");

const secret = "f8snf98esnfs98fnsfkenfsiofnifun";

async function signup(req, res, next) {
  const { email, username, password } = req.body;
  const passwordHash = await bcrypt.hash(password, secret);
  const newUser = new User({ email, username, passwordHash });
  await newUser.save();
  return res.status(200).json({ username, email });
}

module.exports = {
  signup
};
