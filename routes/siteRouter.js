//Site Router- Contains all the things site wise

// importing express and passport
const express = require("express");
const passport = require("passport");

const {
  creditScore,
  resources,
  contact,
  sendMessage,
  profile,
  login,
  localLoginFailed,
  logOutRequest,
  signupRequest,
  forgotLogin,
  changePassword,
} = require("../controller/siteCtrl");

const router = express.Router();

//Credit Score Page
//making a GET route to read credit score page (credit-score.html)
router.get("/credit-score", creditScore);

//Resources Page
//making a GET route to read resources page (resources.html)
router.get("/resources", resources);

//Contact Page
//making a GET route to read contact page (contact.html)
router.get("/contact", contact);

//Use contact form to send message
router.post("/contact/send", sendMessage);

//Profile Page
//making a GET route to read profile page (profile.html)
router.get("/profile", profile);

//check login
router.post("/login", login);

//Forgot Login Page
//route to read forgot login page (forgot-login.html)
router.get("/forgot-login", forgotLogin);

//Use able to change forgotten password
router.put("/forgot-login/edit-password/:_email", changePassword);

//Local login
router.post(
  "/login/local",
  passport.authenticate("local", {
    failureRedirect: "/login/local/failed",
  }),
  (req, res, next) => {
    res.status(200).json({
      success: { message: "User logged in." },
      data: {
        username: req.user.username,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
      },
      statusCode: 200,
    });
  }
);

//Detect for failed login attempts
router.get("/login/local/failed", localLoginFailed);

//Detect for logging out
router.get("/logout", logOutRequest);

//Signing up
router.post("/signup", signupRequest);

//Google Login
router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile"] })
);

//Google Login failed
router.get("/login/google/failed", (req, res, next) => {
  res.json({ message: "There is a problem with Google authentication." });
});

//Google authentication
router.get(
  "/auth/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  })
);

//GitHub Login
router.get("/login/github", passport.authenticate("github"));

//GitHub failed login
router.get("/login/github/failed", (req, res, next) => {
  res.json({ message: "There is a problem with Github authentication." });
});

//GitHub authentication
router.get(
  "/auth/github",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login/github/failed",
  })
);

//exporting router
module.exports = router;
