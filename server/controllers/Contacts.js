const Contact = require("../models/Contacts");

const saveContacts = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;

    // Create a new contact with the fields that are provided, allowing for undefined values
    const contactData = {
      firstName: firstName || "",
      lastName: lastName || "",
      phoneNumber: phoneNumber || "",
    };

    const savedContact = new Contact(contactData);

    await savedContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error saving contacts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveContacts, getContacts };
