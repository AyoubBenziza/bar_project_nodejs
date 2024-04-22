const sequelize = require("sequelize");

const db = new sequelize({
  dialect: "sqlite",
  storage: "db.sqlite",
});

db.sync({ force: true });

module.exports = db;
