const OCR = require("../models/OCR");
const { createWorker } = require('tesseract.js');
const ocrAlgorithm = async (req, res) => {
  const { image } = req.body;
  const worker = await createWorker("eng");
  const ret = await worker.recognize(image);
  console.log(ret.data.text);
  await worker.terminate();
  res.status(200).json(ret.data.text);
};

module.exports = { ocrAlgorithm };
