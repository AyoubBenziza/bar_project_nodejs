// Imports
const { app } = require("./app.js");
const db = require("./config/database");
require("dotenv").config();

// Association Models
const { Association } = require("./models/Association");

Association();

app.listen(process.env.PORT, async () => {
  await db.sync();
  console.log(`App Running on http://localhost:${process.env.PORT}`);
});
