const mongoose = require("mongoose");

const DiseaseSchema = mongoose.Schema({
  name: String,
  causes: String,
  symptoms: String,
});

const Disease = mongoose.model("Disease", DiseaseSchema);
module.exports = Disease;
