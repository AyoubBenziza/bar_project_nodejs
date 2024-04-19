// Imports
const sequelize = require("sequelize");
const Bar = require("./Bar");
const Biere = require("./Biere");
const db = require("../config/database");

// Model
const Commande = db.define("Command", {
  command_id: {
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

// Associations
Commande.belongsTo(Bar);
Commande.belongsToMany(
  Biere,
  { through: Biere_Commande },
  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  }
);

module.exports = Commande;
