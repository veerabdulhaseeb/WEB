const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Article = mongoose.model("article", ArticleSchema);
module.exports = Article;
