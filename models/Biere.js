//Import des fichiers pertinents
const sequelize = require("sequelize");
const db = require("../config/database");

//Modèle de Biere
const Biere = db.define("Biere", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING },
  degree: { type: sequelize.REAL },
  price: { type: sequelize.REAL, validate: { min: 0.01 } },
});

//export
module.exports = Biere;
