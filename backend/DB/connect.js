const mongoose = require("mongoose");

// const url = process.env.MONGODB_URL;

const ConnectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = ConnectDB;
