const express = require("express");
const router = express.Router();
const {
  allItems,
  createItem,
  deleteItem,
  getItembyID,
  updateItem,
} = require("../controllers/item.controller");

router.route("/").post(createItem).get(allItems);
router.route("/:_id").delete(deleteItem).get(getItembyID);
router.route("/update/:_id").put(updateItem);

module.exports = router;
