// Tracker Router - Contains all the things for the financial tracker page
const express = require("express");

const {
  financialTracker,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controller/trackerCtrl");

const router = express.Router();

//Financial Tracker Page
//Goal is that user can edit the financial tracker inputs to add/edit/remove entries

//making GET route to read financial tracker page (financial-tracker.html)
router.get("/tracker", financialTracker);

//User is able to create new expense/budget entry into the tracker
router.post("/tracker/entry/create", createEntry);

//User is able to update entry into tracker
router.put("/tracker/entry/edit/:_id", updateEntry);

//User is able to delete entry from tracker
router.delete("/tracker/entry/delete", deleteEntry);

//exporting router
module.exports = router;
