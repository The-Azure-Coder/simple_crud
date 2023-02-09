const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: [true, " item name is a required field"],
    },
    description: {
      type: String,
      required: [true, " description is a required field"],
    },
    price: {
      type: Number,
      required: [true, " is a required field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
