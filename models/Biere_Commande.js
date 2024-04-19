//Import des fichiers pertinents
const Biere = require("./Biere");
const Commande = require("./Commande");

//Liaison entre Biere et Commande
const Biere_Commande = sequelize.define({
  id_biere: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Biere,
      key: "id",
    },
  },
  id_commande: {
    type: sequelize.DataTypes.INTEGER,
    references: {
      model: Commande,
      key: "id",
    },
  },
});

//export
module.exports = Biere_Commande;
