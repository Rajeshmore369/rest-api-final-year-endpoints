const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  phoneNumber: { type: String, required: false },
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
