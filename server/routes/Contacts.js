const express = require("express");
const contactsRouter = express.Router();
const contactsController = require("../controllers/Contacts");

// Create a new blog
contactsRouter.post("/add", contactsController.saveContacts);
contactsRouter.get("/", contactsController.getContacts);
module.exports = contactsRouter;
