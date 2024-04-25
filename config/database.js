// Imports
const sequelize = require("sequelize");

// Database
const db = new sequelize({
  dialect: "sqlite",
  storage: "db.sqlite",
});

// Exports
module.exports = db;
