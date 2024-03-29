const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("./models/user");
const session = require("express-session");
var cookieParser = require("cookie-parser");
const siteSettings = require("./middlewares/siteSettings");
const Article = require("./models/article");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(require("express-ejs-layouts"));
app.use("/api", require("./routes/api/newsRouter"));

app.use(
  session({
    secret: "sessionsecret",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);

app.use(siteSettings);

mongoose
  .connect("mongodb://127.0.0.1:27017/final_db")
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log("mongo error", err));

app.get("/logout", async (req, res) => {
  console.log("is user", req.session.user);
  req.session.user = null;
  console.log("session clear");
  return res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login", { user: req.session.user });
});

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    req.session.flash = { type: "danger", message: "User Not Present" };
    req.flash("danger", "User with this email not present");
    return res.redirect("/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    req.flash("success", "Logged in Successfully");
    return res.redirect("/");
  } else {
    req.flash("danger", "Invalid Password");
    res.send("invalid login");
  }
});

app.get("/signup", (req, res) => {
  res.render("signup", { user: req.session.user });
});

app.post("/signup", async (req, res) => {
  await User.deleteMany({});
  let user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  await user.save();
  res.redirect("/login");
});

app.get("/", (req, res) => {
  console.log("user", req.session.user);
  res.render("homepage", { user: req.session.user });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/national", (req, res) => {
  res.render("national");
});

app.get("/international", (req, res) => {
  res.render("international");
});

app.get("/technology", (req, res) => {
  res.render("technology");
});

app.get("/add", (req, res) => {
  res.render("add");
});

// app.get("/readlist", require("/middlewares/auth"), async (req, res) => {
//   let readlist = req.cookies.readlist ? req.cookies.readlist : [];
//   let articles = await Article.find({ _id: { $in: readlist } });
//   let total = 0;

//   return res.render("readlist", { articles, total });
// });
// app.get("/cookie-test", (req, res) => {
//   let views = req.cookies.views ? req.cookies.views : 0;
//   views = Number(views) + 1;
// });

app.listen(3000, () => {
  console.log("Listening on http://127.0.0.1:3000");
});
