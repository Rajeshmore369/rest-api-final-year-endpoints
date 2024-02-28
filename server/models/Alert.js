// alertModel.js
const mongoose = require("mongoose");
const User = require("./User"); // Adjust the path accordingly

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  isCar: {
    type: Boolean,
    required: true,
  },
});

const alertSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  fullName: String,
  home: String,
  work: String,
  mobile: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  images: [imageSchema],
  location: String,
  latitude:String,
  longitude:String,
  numberPlate: String,
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
