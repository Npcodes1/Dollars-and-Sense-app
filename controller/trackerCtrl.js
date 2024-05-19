const Tracker = require("../model/trackerModel");

// Financial Tracker Controller -Read the page
const financialTracker = async (req, res, next) => {
  try {
    await res.status(200).json({
      success: { message: "This is the financial tracker page" },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "Financial tracker page can't be found." },
      statusCode: 404,
    });
  }
};

const createEntry = async (req, res, next) => {
  const { category, date, amount, note } = req.body;

  const newEntry = new Tracker({
    category,
    date,
    amount,
    note,
  });

  //checking to see the entry is saved
  try {
    await newEntry.save();
    res.status(201).json({
      success: {
        message: "You've successfully created an entry on the page",
      },
      statusCode: 201,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

const updateEntry = async (req, res, next) => {
  const { _id } = req.params;
  const { category, date, amount, note } = req.body;

  try {
    await Tracker.findByIdAndUpdate(
      _id,
      {
        $set: {
          category,
          date,
          amount,
          note,
        },
      },
      { new: true }
    );
    //checking to see if the entry was updated.
    res.status(200).json({
      success: {
        message: "You've successfully updated an entry on the page",
      },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

const deleteEntry = async (req, res, next) => {
  const { _id } = req.params;

  try {
    await Tracker.findByIdAndDelete(_id);
    //checking to see if the entry was deleted.
    res.status(200).json({
      success: {
        message: "You've successfully deleted an entry on the page",
      },
      statusCode: 200,
    });
  } catch (error) {
    res.status(404).json({
      error: { message: "There was an error. Please try again." },
      statusCode: 404,
    });
  }
};

module.exports = { financialTracker, createEntry, updateEntry, deleteEntry };
