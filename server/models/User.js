const mongoose = require("mongoose");

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

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  home: {
    type: String,
  },
  work: {
    type: String,
  },
  mobile: {
    type: String,
  },
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
  location: {
    type: String,
    required: false,
  },
  numberPlate: {
    type: String,
    required:false
  },
});

module.exports = mongoose.model("User", userSchema);
