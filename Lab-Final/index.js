const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const router = express.Router();
app.use("/", require("./routes/handle"));

mongoose
  .connect("mongodb://127.0.0.1:27017/terminal")
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log("mongo error", err));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/list", (req, res) => {
  res.render("list");
});

app.listen(3000, () => {
  console.log("Listening on http://127.0.0.1:3000");
});
