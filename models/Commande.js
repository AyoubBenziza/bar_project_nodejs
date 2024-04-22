// Imports
const sequelize = require("sequelize");
const db = require("../config/database");

// Model
const Commande = db.define("Commande", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: sequelize.STRING },
  price: { type: sequelize.REAL, validate: { min: 0.01 } },
  date: { type: sequelize.DATE },
  status: {
    type: sequelize.STRING,
    validate: { isIn: [["in progress", "finished"]] },
  },
});

// Exports
module.exports = Commande;
