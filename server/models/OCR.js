const mongoose = require("mongoose");

const ocrSchema = new mongoose.Schema({
  image: { type: String, required: false },
});

const OCR = mongoose.model("OCR", ocrSchema);

module.exports = OCR;
