// Imports
const { app } = require("./app.js");
require("dotenv").config();

// Association Models
const { Association } = require("./models/Association");

Association();

app.listen(process.env.PORT, () => {
  console.log(`App Running on http://localhost:${process.env.PORT}`);
});
