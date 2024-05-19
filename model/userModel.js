//require mongoose
const mongoose = require("mongoose");
const passport = require("passport");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "A first name is required."],
    minLength: [2, "The minimum number of characters is two."],
  },

  lastName: {
    type: String,
    required: [true, "A last name is required."],
    minLength: [2, "The minimum number of characters is two."],
  },

  email: {
    type: String,
    required: [true, "An email is required."],
    minLength: [2, "The minimum number of characters is two."],
    unique: true,
  },

  username: {
    type: String,
    required: [true, "A username is required."],
    minLength: [8, "The minimum number of characters is eight."],
    unique: true,
  },

  password: {
    type: Buffer,
    required: [true, "A password is required."],
    minLength: [8, "The minimum number of characters is eight."],
    unique: true,
  },

  googleId: {
    type: String,
  },

  salt: {
    type: Buffer,
  },

  strategy: {
    type: String,
    required: true,
  },
});

//defining a constant of an constructor object to use mongoose as the middleware for the schema model
const User = mongoose.model("User", userSchema);

//exporting the constructor to call in data throughout the app
module.exports = User;
