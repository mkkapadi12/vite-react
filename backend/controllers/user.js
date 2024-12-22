const USER = require("../models/user");

const getAllUser = (req, res) => {
  res.send("All User");
};

const postUserData = async (req, res) => {
  try {
    const user = req.body; // Extract the body from the request
    // console.log(user);

    // Ensure data is in object format
    const newUser = await USER.create(user);

    res
      .status(200)
      .json({ message: "User data saved successfully!", user: newUser });
    console.log("Success!");
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ message: "Internal server error." });
    console.log("Error!");
  }
};

module.exports = { getAllUser, postUserData };
