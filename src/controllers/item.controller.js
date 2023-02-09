const Item = require("../models/item");

// ------------------creating an item ------------------
const createItem = async (req, res) => {
  try {
    const itemObj = new Item({
      itemName: req.body.itemName,
      description: req.body.description,
      price: req.body.price,
    });
    const createdItem = await Item.create(itemObj);
    res.status(200).json({
      status: "OK",
      data: createdItem,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      data: {
        error: err?.message,
      },
    });
  }
};
// -----------------------------------------------------------------------

// get all items------------------------------------------------------
const allItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({
      status: "OK",
      data: items,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      data: {
        error: err?.message,
      },
    });
  }
};
// ------------------------------------------------

// getting all items by id
// -------------------------------------------------

const getItembyID = async (req, res) => {
  try {
    const item = await Item.findById(req.params);
    res.status(200).json({
      status: "OK",
      data: item,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      data: {
        error: err?.message,
      },
    });
  }
};
// --------------------------------------------------
// update item
// ------------------------------------------------

const updateItem = async (req, res) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(req.params, req.body);
    res.status(200).json({
      status: "OK",
      data: updateItem,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      data: {
        error: err?.message,
      },
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params);
    if (item) await item.delete();
    res.status(200).json({
      status: "OK",
      data: item,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      data: {
        error: err?.message,
      },
    });
  }
};

module.exports = {
  allItems,
  createItem,
  getItembyID,
  updateItem,
  deleteItem,
};
