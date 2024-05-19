//import User from Signup Model
const User = require("../model/signUpModel");

const userSample = new User({
  firstName: "Eliza",

  lastName: "Thornberry",

  email: "eliza.thornberry@gmail.com",

  username: "wildThornberry",

  password: hashedPassword,
});

module.exports = userSample;
