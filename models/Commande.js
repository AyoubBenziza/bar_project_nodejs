const sequelize = require("sequelize");
const db = require("../config/database");

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

Commande.belongsToMany(
  Commande,
  { through: Biere_Commande },
  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  }
);

module.exports = Commande;
