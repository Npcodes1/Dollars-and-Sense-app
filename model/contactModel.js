//require mongoose
const mongoose = require("mongoose");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const sendMessageSchema = new Schema({
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

  message: {
    type: String,
    required: [true, "A message is required."],
    minLength: [2, "The minimum number of characters is two."],
  },
});

//defining a constant of an constructor object to use mongoose as the middleware for the schema model
const Send = mongoose.model("Send", sendMessageSchema);

//exporting the constructor to call in data throughout the app
module.exports = Send;
