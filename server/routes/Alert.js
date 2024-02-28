const express = require("express");
const alertRouter = express.Router();
const alertController = require("../controllers/Alert");

// Create a new blog
alertRouter.post("/", alertController.createAlert);
alertRouter.get("/:userId", alertController.getAlertsByUserId);
module.exports = alertRouter;
