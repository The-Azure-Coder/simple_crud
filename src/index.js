const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { logs } = require("./middlewares/http.logs");
require("dotenv").config();

const indexRouter = require("./routes/index.routes");
const itemRouter = require("./routes/item.routes");

const app = express();

app.use(morgan("dev"));
app.use(logs);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", indexRouter);
app.use("/api/v1/items", itemRouter);

module.exports = app;
