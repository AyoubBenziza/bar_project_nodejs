// Models
const Bar = require("./Bar");
const Biere = require("./Biere");
const Commande = require("./Commande");

// Associations
const Association = () => {
  Biere.belongsToMany(
    Commande,
    { through: "Biere_Commande" },
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  );
  Commande.belongsToMany(
    Biere,
    { through: "Biere_Commande" },
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  );

  Biere.belongsTo(Bar);
  Commande.belongsTo(Bar);

  Bar.hasMany(Biere);
  Bar.hasMany(Commande);
};

// Exports
module.exports = { Association };
