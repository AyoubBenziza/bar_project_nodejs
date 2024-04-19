//Import des fichiers pertinents
const Bar = require("./Bar");
const Commande = require("./Commande");
const sequelize = require("sequelize");
const db = require("../config/database");

//Modèle de Biere
const Biere = db.define("biere", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING },
  degree: { type: sequelize.REAL },
  price: { type: sequelize.REAL, validate: { min: 0.01 } },
});

//Implémentation des liens entre les bases
Biere.belongsTo(Bar);
Biere.belongsToMany(
  Commande,
  { through: Biere_Commande },
  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  }
);

//export
module.exports = Biere;
