const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;
