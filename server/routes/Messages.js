const express = require("express");
const { sendMessages } = require("../controllers/Messages");
const messageRouter = express.Router();

// Create a new blog
messageRouter.post("/send-msg", sendMessages);
module.exports = messageRouter;
