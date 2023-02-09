const app = require("./index");
const database = require("../database/db");
require("dotenv").config();

database();

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
