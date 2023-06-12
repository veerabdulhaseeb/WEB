const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Article = require("../../models/article");

router.get("/add", async (req, res) => {
  res.render("add");
});

router.post("/add", async (req, res) => {
  console.log("adjasdbfbdad");
  const { title, description, image } = req.body;
  const article = new Article({
    title: title,
    description: description,
    image: image,
  });
  const article1 = await article.save();
  console.log(article1);
  console.log(description, image);
  res.redirect("/api/list");
});

router.get("/list", async (req, res) => {
  const article = await Article.find();

  console.log("rydhydyh", article);
  return res.render("international", { article });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("edit", { article });
});

router.post("/edit/:id", async (req, res) => {
  const { title, description } = req.body;
  console.log(title, description);
  const article = await Article.findById(req.params.id);
  if (!article) return res.status(404).send("Article not found");
  (article.title = title), (article.description = description);
  await article.save();
  res.redirect("/api/list");
});

router.get("/delete/:id", async (req, res) => {
  console.log("dawwafagr");
  const article = await Article.findByIdAndDelete(req.params.id);
  if (!article) return res.status(404).send("Article not found");
  console.log(article);
  res.redirect("/api/list");
});

module.exports = router;
