require("dotenv").config();
const mongoose = require("mongoose");

const database = () => {
  mongoose.connect(process.env.CONN_URI, () => {
    try {
      console.log("Database Connected Successfully");
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = database;
