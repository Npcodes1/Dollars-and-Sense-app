//authRouter to contain the authorization-related routes. The routes will go to the admin console page.

// importing express
const express = require("express");

//import handler Functions from the controller directory
const {
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
} = require("../controller/authCtrl");

//importing express.Router() to handle different requests
const router = express.Router();

//Admin

//making a GET route to read admin console page (admin.html)
router.get("/admin", admin);

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(403, "/unauthenticated");
  }
};

// router.get("/admin/login", checkAuthentication, (req, res, next) => {
//   router.get("/auth", (req, res, next) => {
//     res.json("Authenticated");
//   });

//route to get all users
router.get("/admin/users", getAllUsers);

//route to get a single user
router.get("/admin/users/:_id", getUser);

//Finding user by email for forgot-login page to change password.
router.get("/admin/retrieve-user/:_email", getUserByEmail);

//route to create user
router.post("/admin/users/create", createUser);

//route to edit user
router.put("/admin/users/edit/:_id", editUser);

//route to delete user
router.delete("/admin/users/delete/:_id", deleteUser);

//route to get all messages
// router.get("/admin/messages", getAllMessages);
router.get("/admin/messages", getAllMessages);

//route to get a single message
router.get("/admin/messages/:_id", getMessage);

//route to edit a single message
router.put("/messages/edit/:_id", editMessage);

//route to delete a single message
router.delete("/messages/delete/:_id", deleteMessage);
// });

// test to see if route function for authentication
router.get("/admin/auth-test", (req, res, next) => {
  res.json("Authenticated");
});

router.get("/unauthenticated", (req, res, next) => {
  res.redirect("/"); // user not authenticated so it'll redirect to homepage
});

// exporting router
module.exports = router;
