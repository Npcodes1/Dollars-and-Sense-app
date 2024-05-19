// //import bcrypt
const bcrypt = require("bcrypt");

//import User Model
const User = require("../model/userModel");

//import Message Model
const Send = require("../model/contactModel");

//To see the admin console page
const admin = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the admin page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Admin page can't be found." },
      statusCode: 404,
    });
  }
};

//Admin access- ability to use CRUD operations
//Search the User collection for all users
const getAllUsers = async (req, res, next) => {
  try {
    await User.find({}).then((users) =>
      res.status(200).json({
        success: { message: "Reference the users and list all of them." },
        data: users,
        statusCode: 200,
      })
    );
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting all the users!" },
      statusCode: 400,
    });
  }
};

//Search the User collection to find a single user
const getUser = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await User.findOne({ _id: _id }).then((users) => {
      res.status(200).json({
        success: { message: "A single user was successfully selected" },
        data: users,
        statusCode: 200,
      });
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting the user!" },
      statusCode: 400,
    });
  }
};

//Search the User collection to find a single user by email
const getUserByEmail = async (req, res, next) => {
  const { _email } = req.params;

  try {
    await User.findOne({ email: _email }).then((users) => {
      res.status(200).json({
        success: { message: "A single user email was successfully selected" },
        data: users,
        statusCode: 200,
      });
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting the user's email!" },
      statusCode: 400,
    });
  }
};

//create a new User
const createUser = async (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;

  bcrypt.hash(password, 10, async (error, hashedPassword) => {
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      googleId: "",
    });

    try {
      await newUser.save();
      req.login(newUser, (err) => {
        if (err) {
          res.status(400).json({
            error: {
              message:
                "There was a problem while signing up. Please try again!",
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
  });
};

//Edit a document (single user) that is already stored in the User collection
const editUser = async (req, res, next) => {
  const { _id } = req.params;
  const { firstName, lastName, email, username } = req.body;

  try {
    await User.findByIdAndUpdate(
      _id,
      {
        $set: {
          firstName,
          lastName,
          email,
          username,
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: { message: "User has been updated!" },
      statusCode: 201,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong updating the user!" },
      statusCode: 400,
    });
  }
};

//Delete document (single user) in the User collection
const deleteUser = async (req, res, next) => {
  const { _id } = req.params;
  try {
    await User.findByIdAndDelete(_id);
    res.status(200).json({
      success: { message: "User has been successfully deleted!" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong when deleting the user!" },
      statusCode: 400,
    });
  }
};

//Search the Send Collection to get all of the messages
const getAllMessages = async (req, res, next) => {
  try {
    await Send.find({}).then((sends) =>
      res.status(200).json({
        success: {
          message:
            "Reference the messages from the contact form and list all of them.",
        },
        data: sends,
        statusCode: 200,
      })
    );
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting all the messages!" },
      statusCode: 400,
    });
  }
};

//Search the Send Collection to find a single message
const getMessage = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Send.findOne({ _id: _id }).then((message) => {
      res.status(200).json({
        success: { message: "A single user was successfully selected" },
        data: message,
        statusCode: 200,
      });
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong getting the message!" },
      statusCode: 400,
    });
  }
};

//Edit a document (single message) that is already stored in the Send collection
const editMessage = async (req, res, next) => {
  const { _id } = req.params;
  const { firstName, lastName, email, message } = req.body;

  try {
    await Send.findByIdAndUpdate(
      _id,
      {
        $set: {
          firstName,
          lastName,
          email,
          message,
        },
      },
      { new: true }
    );
    res.status(201).json({
      success: { message: "Message has been updated!" },
      statusCode: 201,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong updating the message!" },
      statusCode: 400,
    });
  }
};

//Delete document (single message) in the Send collection
const deleteMessage = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Send.findByIdAndDelete(_id);
    res.status(200).json({
      success: { message: "Message has been successfully deleted!" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Something went wrong when deleting the message!" },
      statusCode: 400,
    });
  }
};

module.exports = {
  admin,
  getAllUsers,
  getUser,
  getUserByEmail,
  createUser,
  editUser,
  deleteUser,
  getAllMessages,
  getMessage,
  editMessage,
  deleteMessage,
};
