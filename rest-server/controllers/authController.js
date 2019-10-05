const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//https://codahale.com/how-to-safely-store-a-password/
//https://www.skyhighnetworks.com/cloud-security-blog/what-is-a-salt-and-how-does-it-make-password-hashing-more-secure/
//https://auth0.com/blog/hashing-in-action-understanding-bcrypt/

const secret = "f8snf98esnfs98fnsfkenfsiofnifun";

async function signup(req, res, next) {
  const { email, username, password } = req.body;
  console.log(req.body);
  const passwordHash = await bcrypt.hash(password, 12);
  const newUser = new User({ email, username, passwordHash });
  await newUser.save();
  return res.status(200).json({ username, email });
}

async function login(req, res, next) {
  const { email, password } = req.body;
  const userInDb = await User.findOne({ email });
  const match = bcrypt.compare(password, userInDb.passwordHash);
  if (match) {
    const token = await jwt.sign({ email }, secret);
    return res.status(200).json({ token });
  }
  return res.status(404);
}

module.exports = {
  signup,
  login
};
