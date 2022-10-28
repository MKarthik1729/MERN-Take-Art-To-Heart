const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", User);
