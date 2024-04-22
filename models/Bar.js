const sequelize = require("sequelize");
const db = require("../config/database");

const Bar = db.define("Bar", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING, unique: true },
  tel: { type: sequelize.STRING },
  adresse: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  description: { type: sequelize.TEXT },
});

module.exports = Bar;
