//Site Controller
const bcrypt = require("bcryptjs");

//import User Model
const User = require("../model/userModel.js");

//summon the model template for Get In Touch form
const Send = require("../model/contactModel");

//Credit Score Page - Read the page
const creditScore = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the credit score page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Credit score page can't be found." },
      statusCode: 404,
    });
  }
};

//Resources Page-read the page
const resources = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the resources page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Resources page can't be found." },
      statusCode: 404,
    });
  }
};

//Contact Page- read the page
const contact = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the contact page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Contact score page can't be found." },
      statusCode: 404,
    });
  }
};

// Sending message using Contact form
const sendMessage = async (req, res, next) => {
  //form inputs that user enters on the form
  const { firstName, lastName, email, message } = req.body;

  const newMessage = new Send({
    firstName,
    lastName,
    email,
    message,
  });

  //checking that the message is saved
  try {
    await newMessage.save();
    res.status(201).json({
      success: { message: "Message successfully sent" },
      data: newMessage,
      statusCode: 201,
    });
  } catch (error) {
    res.status(404).json({
      error: {
        message: "There was a problem sending the message. Please try again",
      },
      statusCode: 404,
    });
  }
};

//to read profile page
const profile = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the profile page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Profile page can't be found." },
      statusCode: 404,
    });
  }
};

//check login
const login = async (req, res, next) => {
  console.log(req.user);
  res.status(200).json({
    success: { message: "User logged in." },
    data: {
      username: req.user.username,
    },
    statusCode: 200,
  });
};

//Login Failed
const localLoginFailed = (req, res, next) => {
  res.status(401).json({
    success: { error: "User or password is incorrect. Please try again." },
    statusCode: 401,
  });
};

//Logout request -not working
const logOutRequest = (req, res, next) => {
  req.logout((error) => {
    if (error) {
      res.status(400).json({
        error: { message: "There was a problem logging out." },
        statusCode: 400,
      });
    }
    res.status(200).json({
      success: { message: "User successfully logged out." },
      statusCode: 200,
    });
  });
};

// SignUp Request- creating a new user (permission for both user and admin)
const signupRequest = async (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      googleId: "",
    });

    await newUser.save();
    req.login(newUser, (err) => {
      if (err) {
        res.status(400).json({
          error: {
            message: "There was a problem while signing up. Please try again!",
          },
          statusCode: 400,
        });
      }
    });

    res.status(201).json({
      success: { message: "New user has been created." },
      data: { firstName, lastName, email, username },
      statusCode: 201,
    });

    //to catch attempts on creating duplicate accounts with same username
  } catch (err) {
    if (err.code === 11000 && err.keyPattern.username) {
      res.status(400).json({
        error: {
          message: "Username already exists. Please enter another username.",
        },
        statusCode: 400,
      });
    } else {
      res.status(500).json({
        error: { message: "Internal server error." },
        statusCode: 500,
      });
    }
  }
};

//to get to forgot-login page
const forgotLogin = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the forgot login page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Forgot login page can't be found." },
      statusCode: 404,
    });
  }
};

//Update password if forgotten
const changePassword = async (req, res, next) => {
  const { _email } = req.params;
  const { password } = req.body;

  try {
    await User.findOneAndUpdate(
      _email,
      {
        $set: {
          password,
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: { message: "User's password has been updated!" },
      statusCode: 201,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong updating the user's password!" },
      statusCode: 400,
    });
  }
};

module.exports = {
  creditScore,
  resources,
  contact,
  sendMessage,
  profile,
  login,
  signupRequest,
  localLoginFailed,
  logOutRequest,
  forgotLogin,
  changePassword,
};
