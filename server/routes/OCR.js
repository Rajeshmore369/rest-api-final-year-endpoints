const express = require("express");
const ocrRouter = express.Router();
const ocrController = require("../controllers/OCR");

// Create a new blog
ocrRouter.post("/algo-result", ocrController.ocrAlgorithm);
module.exports = ocrRouter;
