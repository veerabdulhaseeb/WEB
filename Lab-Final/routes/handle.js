const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Disease = require("../models/diseases");

router.post("/", async (req, res) => {
  let diseases = new disease(req.body);
  let disease = new disease({
    name: req.body.name,
    causes: req.body.causes,
    symptoms: req.body.symptoms,
  });
  disease = await Disease.save();
  res.render(list);
});

router.get("/", async (req, res) => {
  const disease = await Disease.find();

  return res.render("list", { disease });
});

router.put("/:id", async (req, res) => {
  const disease = await Disease.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    causes: req.body.causes,
    symptoms: req.body.symptoms,
  });
  res.render(disease);
});

router.delete("/:id", async (req, res) => {
  const disease = await Disease.findByIdAndRemove(req.params.id);
  res.render(list);
});

module.exports = router;
