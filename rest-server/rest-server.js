const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRouter");

mongoose.connect(
  "mongodb://chatapp:SuperPassw0rd@ds331198.mlab.com:31198/chat-app",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.listen(3002, () => {
  console.log("REST SERVER RUNNING");
});
