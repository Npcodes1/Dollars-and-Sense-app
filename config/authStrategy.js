const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github").Strategy;

const User = require("../model/userModel");

//implement Local strategy
passport.use(
  new LocalStrategy(
    (verify = (username, password, done) => {
      User.findOne({ username: username })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "User not found." });
          }
          bcrypt.compare(password, user.password, (error, result) => {
            console.log("result", result);
            //if there's a user, use bcrypt to compare the password entered vs stored and console.log the result to check if there's a match.
            if (error) {
              return done(error);
            }
            return done(null, user);
          });
        })
        .catch((error) => {
          console.log(
            `There was an error finding the user from the database: ${error}.`
          );
        });
    })
  )
);

// implement Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://dollars-and-sense-app.onrender.com/api/auth/google",
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

//implement Github strategy
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://dollars-and-sense-app.onrender.com/api/auth/github",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    }
  )
);

//implement serializedUser and deserializedUser
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
