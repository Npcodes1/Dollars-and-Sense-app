//require mongoose
const mongoose = require("mongoose");

//define Schema as a new mongoose Schema
const { Schema } = mongoose;

const trackerSchema = new Schema({
  category: {
    type: String,
    enum: [
      "Income",
      "Mortgage/Rent",
      "Utilities",
      "Insurance",
      "Food/Drinks",
      "Transportation",
      "Health/Wellness",
      "Entertainment",
      "Miscellaneous",
    ],
    required: [true, "A category is required."],
  },

  date: {
    type: Date,
    required: [true, "A date is required."],
    minLength: [2, "The minimum number of characters is two."],
  },

  amount: {
    type: Number,
    required: [true, "An amount is required."],
  },

  note: {
    type: String,
    minLength: [2, "The minimum number of characters is two."],
  },
});

//defining a constant of an constructor object to use mongoose as the middleware for the schema model
const Tracker = mongoose.model("Tracker", trackerSchema);

//exporting the constructor to call in data throughout the app
module.exports = Tracker;
